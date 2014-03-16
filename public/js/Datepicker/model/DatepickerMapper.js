var MONDAY = 1;
var DatepickerMapper = {
  generateDatepickerData: function (year, month, options) {
    var monthData = this.generateMonthData(year, month, MONDAY);
    var weekData = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
    var monthString = 'Февраль';
    return {
      weekData: weekData,
      month: monthString,
      year: year,
      monthData: monthData
    };
  },

  generateCurrentAndNextMonth: function (year, month) {
    var res = {};
    var nextYear, nextMonth;
    if (month + 1 > 12) {
      nextMonth = 0;
      nextYear = year + 1;
    } else {
      nextMonth = month + 1;
      nextYear = year;
    }

    return {
      currentMonth: month,
      currentYear: year,
      nextMonth: nextMonth,
      nextYear: nextYear
    };
  },

  generateMonthData: function (year, month, firstDay, viewParams) {
    var cellInfo = this.generateCellInfo(year, month, firstDay);
    var totalCells = cellInfo.before + cellInfo.days + cellInfo.after;
    var before = cellInfo.before;
    var after = cellInfo.after;
    var days = cellInfo.days;
    var prevMonth;
    var dateObject;
    var data = [];
    var week = [];

    viewParams = {
      selectedDates: [{
        from: '2014-03-17',
        to: '2014-03-20'
      },{
        from: '2014-03-18',
        to: '2014-03-22'
      }],
      disabledDates: [{
        from: '2014-03-01',
        to: '2014-03-15'
      }, {
        from: '2014-03-29',
        to: '2014-04-03'
      }]
    };

    for (var i = 0, weekDayCounter = 0; i < totalCells; i++) {
      dateObject = {};
      //Берем даты только за этот месяц, не считая те дни, который были в начале и конце месяца
      if (i >= before && i < (days + before)) {
        var date = i - before + 1;
        dateObject = {
          date: date,
          month: month,
          currentMonth: 'current',
          year: year
        };


        if (viewParams) {
          var tmpDate = new Date(Date.parse((month + 1) + '/' + date + '/' + year));
          var viewObject = this.generateViewParamsObject(tmpDate, viewParams);
          dateObject.isDisabled = viewObject.isDisabled;
          dateObject.isSelectedTo = viewObject.isSelectedTo;
          dateObject.isSelectedFrom = viewObject.isSelectedFrom;
          dateObject.isBetween = viewObject.isBetween;
        }

      }
      week.push(dateObject);
      if (++weekDayCounter === 7) {
        data.push(week);
        week = [];
        weekDayCounter = 0;
      }
    }
    return data;
  },

  generateViewParamsObject: function (tmpDate, viewParams) {
    var self = this;
    var res = {};
    var tmpTime = tmpDate.getTime();
    viewParams.disabledDates.forEach(function (date) {
      var disabledFrom = self.parseDateFromString(date.from).getTime();
      var disabledTo = self.parseDateFromString(date.to).getTime();

      res.isDisabled =  (tmpTime >= disabledFrom) && (tmpTime <= disabledTo);
    });

    viewParams.selectedDates.forEach(function (date) {
      var selectedFrom = self.parseDateFromString(date.from).getTime();
      var selectedTo;
      if (date.to) {
        selectedTo = self.parseDateFromString(date.to).getTime();
      } else {
        res.isSelectedTo = false;
      }

      if (!(res.isDisabled)) {
        res.isSelectedFrom = res.isSelectedFrom || (tmpTime === selectedFrom);
        res.isSelectedTo = res.isSelectedTo || (tmpTime === selectedTo);
        res.isBetween = res.isBetween || ((tmpTime >= selectedFrom) && (tmpTime <= selectedTo));
      }
    });

    console.log(res, tmpDate);

    return res;
  },

  /**
   * Генерируем информацию о ячейках, которые были до, во время и после текущего месяца
   * @param  {[type]} year     [description]
   * @param  {[type]} month    [description]
   * @param  {[type]} firstDay [description]
   * @return {[type]}          [description]
   */
  generateCellInfo: function (year, month, firstDay) {
    //Общее количество ячеек на развороте месяца
    //которое нужно добавить
    var afterLastWeek,
        daysInMonth = this.getDaysInMonth(year, month);

        //количество дней в первой недели, которое
        //нужно добавить
        beforeFirstWeek = new Date(year, month, 1).getDay();

    if (firstDay > 0) {
      beforeFirstWeek -= firstDay;
      if (beforeFirstWeek < 0) {
        beforeFirstWeek += 7;
      }
    }

    afterLastWeek = daysInMonth + beforeFirstWeek;
    while(afterLastWeek > 7) {
      afterLastWeek -=7;
    }
    afterLastWeek = 7 - afterLastWeek;

    return {
      before: beforeFirstWeek,
      after: afterLastWeek,
      days: daysInMonth
    };
  },

  parseDateFromString: function (string) {
    var stringForParse = string;
    return new Date(stringForParse.replace(/(\d+)-(\d+)-(\d+)/, '$2/$3/$1'));
  },

  isDate: function (obj) {
    return (
      ("[object Date]" === Object.prototype.toString.call(obj)) &&
      !isNaN(obj.getTime())
    );
  },
  //Берем количество дней в каждом месяце
  getDaysInMonth: function(year, month) {
    return [31, this.isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
  },
  //Определяем, что год високосный
  isLeapYear: function(year) {
    return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
  }
};
module.exports = DatepickerMapper;