

function set_breakpoint() {

  var breakpoint = window.getComputedStyle(__mq,":after").getPropertyValue("content");

  if((breakpoint.indexOf("mobile") !=-1)) {

    __breakpoint = 'mobile';

    if(breakpoints_loaded) {
      // do stuff crossing over to mobile...
    }
  }

  if((breakpoint.indexOf("portrait") !=-1)) {

    __breakpoint = 'portrait';

    if(breakpoints_loaded) {
      // do stuff crossing over to portrait...
    }
  }

  if((breakpoint.indexOf("landscape") !=-1)) {

    __breakpoint = 'landscape';

    if(breakpoints_loaded) {
      // do stuff crossing over to landscape...
    }
  }

  // ignore the first load
  breakpoints_loaded = true;

}
