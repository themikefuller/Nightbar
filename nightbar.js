function Nightbar() {
  var pos = 0;
  var rev = false;
  var barcount = 6;
  var bars = [];
  var nightbar = document.createElement('div');
  nightbar.style.width = "100%";
  nightbar.style.maxWidth = "700px";
  nightbar.style.overflow = "hidden";
  nightbar.style.margin = "0 auto";
  nightbar.style.textAlign = "center";
  for (var x = 0; x < barcount; x++) {
    bars[x] = document.createElement('div');
    bars[x].style.width = "100px";
    bars[x].style.height = "50px";
    bars[x].style.display = "inline";
    bars[x].style.paddingLeft = '10%';
    bars[x].style.marginLeft = "10px";
    nightbar.appendChild(bars[x]);
  }
  var goDark = function(div) {
    setTimeout(function() {
      div.style.background = "#990000";
    }, 200);
  }
  setInterval(function() {
    if (bars[pos]) {
      bars[pos].style.background = "#ee0000";
      goDark(bars[pos]);
    }
    if (pos == bars.length - 1) {
      rev = true;
    }
    if (pos < 1) {
      rev = false;
    }
    if (rev) {
      pos--;
    } else {
      pos++;
    }
  }, 140);


  return nightbar;
}
