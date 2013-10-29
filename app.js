$(function() {
  var canvas = $('#canvas')[0];
  var ctx = canvas.getContext('2d');
  console.log(ctx);
  var h = canvas.height;
  var len = 100;
  var ymid = Math.floor(h / 2);

  ctx.fillStyle = '#00ff00';
  ctx.fillRect(0, 0, len, ymid);

  ctx.fillStyle = '#ff0000';
  ctx.fillRect(len, ymid, len, h - ymid);
});
