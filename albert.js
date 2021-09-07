Albert = document.getElementById("Albert");
var left = 0, right=1300;



function forward() {
  left += 1;
  if (left <= right) {
    Albert.style.left = left + "px";
  }
  else {
    back();

  }
}
setInterval(forward, 10);


function back() {
  right -= 1;
  if (right >= 0) {
    Albert.style.left = right + "px";

  }
}

document.addEventListener('mousemove', (e) => {
  var eyes = document.querySelectorAll(".eye");
  eyes.forEach(eye => {
    var rect = eye.getBoundingClientRect();
    var x = rect.left + (rect.width / 2);
    var y = rect.top + (rect.height / 2);
    var rad = Math.atan2(e.x - x, e.y - y);
    var deg = (rad * (180 / Math.PI) * -1) + 180;
    eye.style.transform = "rotate(" + deg + "deg)";
  });


});