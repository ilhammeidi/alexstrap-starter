var transition = {
  section: {
    show: "slideInLeft",
    hide: "slideOutRight",
    delayShow: "delay0s"
  },
  h1: {
    show: "fadeInDown",
    hide: "fadeOutUp",
    delayShow: "delay1s"
  },
  p: {
    show: "fadeInUp",
    hide: "fadeOutDown",
    delayShow: "delay1s"
  },
  '.hero-buttons': {
    show: "fadeInUp",
    hide: "fadeOutDown",
    delayShow: "delay1-5s"
  },
  img: {
    show: "fadeIn",
    hide: "fadeOut",
    delayShow: "delay1-5s"
  },
  span: {
    show: "fadeInDown",
    hide: "fadeOutUp",
    delayShow: "delay1s"
  },
  strong: {
    show: "fadeInUp",
    hide: "fadeOutDown",
    delayShow: "delay1-5s"
  }
}

$(function(){
  // animate slider
  $(".anim-slider").animateSlider({
    autoplay: true,
    interval: 10000,
    animations: {
      0: transition,
      1: transition,
      2: transition
    }
  });
});