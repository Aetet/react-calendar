var MONDAY = 1;
var DatepickerMapper = {
  generateDatepickerData: function (year, month, opts) {
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
  generateMonthData: function (year, month, firstDay) {
    var cellInfo = this.generateCellInfo(year, month, firstDay);
    var totalCells = cellInfo.before + cellInfo.days + cellInfo.after;
    var before = cellInfo.before;
    var after = cellInfo.after;
    var days = cellInfo.days;
    var prevMonth;
    var data = [];
    var week = [];

    for (var i = 0, r = 0; i < totalCells; i++) {
      if (i < before) {
        monthP = month - 1;
        prevMonth = (monthP >= 0) ? monthP : 12 + monthP;
        week.push({
          month: prevMonth,
          current: 'prev'
        });
      } else {
        if (i >= days + before) {
          monthN = month + 1;
          prevMonth = (monthN <= 12) ? monthN : monthN - 12;
          week.push({
            month: month + 1,
            current: 'next'
          });
        } else {
          var date = (i - before + 1) + '.' +(month + 1 + '') + '.' + (year + '');
          week.push({
            day: i - before + 1,
            month: month,
            current: 'current'
          });

        }
      }
      if (++r === 7) {
        data.push(week);
        week = [];
        r = 0;
      }
    }
    return data;
  },
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