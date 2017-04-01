$(document).foundation();


var sly = new Sly(jQuery('.frame'), options = {
      horizontal: 1,
      itemNav: 'forceCentered',
      smart: 1,
      activateOn: 'click',
      activateMiddle: 1,
      mouseDragging: 1,
      touchDragging: 1,
      releaseSwing: 1,
      elasticBounds: 0.5,
      speed: 300,
      keyboardNavBy: 'items',
    }).init();
