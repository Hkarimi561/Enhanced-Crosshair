$(function(){
  sight = {}
  sight.show = function(data){
    $('.reticle-wrapper').fadeIn();
  };

  sight.hide = function() {
    $(".reticle-wrapper").fadeOut();
  };
  window.addEventListener('message', function(event) {
    switch(event.data.display) {
      case 'aimIn':
				sight.show(event.data);
      break;
      case 'aimOut':
				sight.hide(event.data);
      break;
    }
  });
});