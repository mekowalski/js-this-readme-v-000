console.log(this === window)
//sweet that worked

function checkThis() {
  'use strict'
  console.log(this)
}
checkThis()
//this worked too

function Chair(style, color) {
  // console.log(this); this gives empty object
  this.style = style;
  this.color = color;
  // console.log(this); this gives new object with new instance of sofa below
}
var sofa = new Chair("sofa", "green");

var couch = {
  color: 'green',
  f: function() {
    return this;
  }
};

console.log(couch.f());
//returns obj w/ attached value not couch bc that's variable name holding object

<img class="pix" src="http://i.giphy.com/S1phUc5mmaZqM.gif">
<img class="pix" src="http://i.giphy.com/eGe59ekUJEll6.gif">
<img class="pix" src="http://i.giphy.com/l41lNT5u8hCI92nQc.gif">
<script type="text/javascript" charset="utf-8">
    var els = document.getElementsByClassName("pix");
    function handleClick(e) {
      console.log(this);
    }
    for(var i=0 ; i < els.length ; i++){
      els[i].addEventListener("click", handleClick, false);
    }
</script>
