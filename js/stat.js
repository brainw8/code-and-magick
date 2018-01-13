'use strict';


window.renderStatistics = function (ctx, names, times) {

  // прямоугольник
  ctx.fillStyle = 'rgba(195, 239, 248, 1.0)';
  ctx.fillRect(100, 10, 420, 270);
  ctx.strokeRect(100, 10, 420, 270);
  // шрифт
  ctx.fillStyle = '#000';
  ctx.font = '14 px PT Mono';
  ctx.fillText('Ура вы победили!', 150, 30);
  ctx.fillText('Список результатов:', 150, 45);

  var max = -1;
  var maxIndex = -1;

  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
      maxIndex = i;
    }
  }

  var histogramHeight = 150;
  var step = histogramHeight / (max - 0);

  ctx.fillText('Худшее время: ' + Math.floor(max) + 'мс у игрока ' + names[maxIndex], 120, 60);

  var barWidth = 20;
  var ident = 60;
  var initialX = 120;
  var initialY = 100;

  ctx.fillStyle = 'rgba(0, 0, 0, 1.0)';

  for (var y = 0; y < times.length; y++) {

    ctx.fillRect(initialX + ident * y, initialY, barWidth, times[y] * step);
    ctx.fillText(names[y], initialX + ident * y, initialY - 10);

  }

};
