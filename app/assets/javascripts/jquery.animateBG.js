$.fn.animateBG = function(x, y, speed) {
    var pos = this.css('background-position').split(' ');
    this.x = parseInt(pos[0]) || 0;
    this.y = parseInt(pos[1]) || 0;
    $.Animation( this, {
        x: x,
        y: y
      }, { 
        duration: speed
      }).progress(function(e) {
          this.css('background-position', e.tweens[0].now+'px '+e.tweens[1].now+'px');
    });
    return this;
};