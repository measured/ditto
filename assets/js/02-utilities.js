

// generic scroll to anchor function
function scroll_to(target) {    
  if (target.offset()) {
    __htmlbody.animate({scrollTop: target.offset().top + 'px'}, 600);
  }
}

// custom fastclick function...
function update_fastclick() {
  var fastclick_elements = $('[data-fastclick]');
  fastclick_elements.each(function(index) {
    FastClick.attach(this);
  });
}
