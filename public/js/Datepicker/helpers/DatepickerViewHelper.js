var DatepickerViewHelper = {

  getShowClass: function (isShow) {
    var isShowClass = (isShow) ? '' : 'hidden';
    return {
      isShow: isShowClass
    };
  },

  /**
   * Генерируем класс для визуального представления дня.
   * @param  {String}  defaultClass   Класс по умолчанию
   * @param  {Boolean} isSelectedFrom Является ли дата начальной
   * @param  {Boolean} isSelectedTo   Является ли дата конечной
   * @param  {Boolean} isDisabled     Активна или нет
   * @param  {Boolean} isBetween      Между начальной и конечной
   * @return {String}                 Строка класса
   */
  getDayClass: function (defaultClass,
                         isSelectedFrom,
                         isSelectedTo,
                         isDisabled,
                         isBetween) {
    var res;

    if (typeof defaultClass === 'string') {
      res = defaultClass;
    } else {
      res = '';
    }

    if (isDisabled) {
      res += ' bDay_mDisabled';
    } else if (isSelectedFrom) {
      res += ' bDay_mSelectedFrom';
    } else if (isSelectedTo) {
      res += ' bDay_mSelectedTo';
    } else if (isBetween) {
      res += ' bDay_mBetween';
    }

    return res;
  },
};
module.exports = DatepickerViewHelper;