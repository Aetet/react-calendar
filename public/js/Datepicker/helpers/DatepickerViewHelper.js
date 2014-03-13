var DatepickerViewHelper = {
  getViewParams: function (state) {
    var isShow = (state.isShow) ? '' : 'hidden';
    return {
      isShow: isShow
    };
  }
};
module.exports = DatepickerViewHelper;