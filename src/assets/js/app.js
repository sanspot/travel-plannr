$(document).foundation();


var sly = new Sly('.frame',  {
      horizontal: 1,
      itemNav: 'basic',
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
