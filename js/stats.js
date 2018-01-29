'use strict';

var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var GAP = 10;
var BAR_HEIGHT = 150;
var COLUMN_WIDTH = 40;
var COLUMN_GAP = 50;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {

  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#ffffff');

  ctx.fillStyle = '#000000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CLOUD_X + COLUMN_WIDTH, GAP * 2);
  ctx.fillText('Список результатов:', CLOUD_X + COLUMN_WIDTH, COLUMN_WIDTH);

  var maxTime = getMaxElement(times);
  for (var i = 0; i < names.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      ctx.fillRect(CLOUD_X + COLUMN_GAP * (i + 1) + COLUMN_WIDTH * i, CLOUD_X + BAR_HEIGHT - BAR_HEIGHT * Math.round(times[i]) / maxTime, COLUMN_WIDTH, BAR_HEIGHT * Math.round(times[i]) / maxTime);
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255, ' + Math.random() + ')';
      ctx.fillRect(CLOUD_X + COLUMN_GAP * (i + 1) + COLUMN_WIDTH * i, CLOUD_X + BAR_HEIGHT - BAR_HEIGHT * Math.round(times[i]) / maxTime, COLUMN_WIDTH, BAR_HEIGHT * Math.round(times[i]) / maxTime);
    }
    ctx.fillStyle = '#000000';
    ctx.fillText(names[i], CLOUD_X + COLUMN_GAP * (i + 1) + COLUMN_WIDTH * i, CLOUD_X + GAP + BAR_HEIGHT);
  }
};
