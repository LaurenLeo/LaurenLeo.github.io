//Helper function to add an event listener
function addEvent(el, event, callback) {
  if ('addEventListener' in el) {
    el.addEventListener(event, callback, false);
  } else {
    el['e' + event + callback] = callback;
    el[event + callback] = function() {
      el['e' + event + callback](window.event);
    };
    el.attachEvent('on' + event, el[event + callback]);
  }
}
