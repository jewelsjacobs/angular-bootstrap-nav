(function (window) {

  return clickElement = function (el) {
    console.log(el)
    if (el.click) {
      el.click();
    } else {
      // Phantom doesn't go for 'click':
      // http://stackoverflow.com/questions/17468611/triggering-click-event-phantomjs
      var ev = document.createEvent('MouseEvent');
      ev.initMouseEvent(
        'click',
        true /* bubble */, true /* cancelable */,
        window, null,
        0, 0, 0, 0, /* coordinates */
        false, false, false, false, /* modifier keys */
        0 /*left*/, null
      );
      el.dispatchEvent(ev);
    }
  }
})(window);
