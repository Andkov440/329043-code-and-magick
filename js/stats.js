'use strict';

var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var GAP = 10;
var BAR_HEIGHT = 150;
var COLUMN_WIDTH = 40;
var COLUMN_GAP = 50;
var TEXT_COLOR = '#000000';

var MY_COLOR = 'rgba(255, 0, 0, 1)';
var CLOUD_COLOR = 'rgba(0, 0, 0, 0.7)';

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (gamersResults) {
  var maxElement = gamersResults[0];

  for (var i = 1; i < gamersResults.length; i++) {
    if (gamersResults[i] > maxElement) {
      maxElement = gamersResults[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {

  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, CLOUD_COLOR);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#ffffff');

  ctx.fillStyle = TEXT_COLOR;
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CLOUD_X + COLUMN_WIDTH, GAP * 2);
  ctx.fillText('Список результатов:', CLOUD_X + COLUMN_WIDTH, COLUMN_WIDTH);

  var maxTime = getMaxElement(times);
  for (var i = 0; i < names.length; i++) {
    var playersColor = 'rgba(0, 0, 255, ' + Math.random() + ')';
    ctx.fillText(Math.round(times[i]), CLOUD_X + COLUMN_GAP * (i + 1) + COLUMN_WIDTH * i, CLOUD_X + BAR_HEIGHT - BAR_HEIGHT * Math.round(times[i]) / maxTime - GAP * 2);
    ctx.fillStyle = (names[i] === 'Вы') ? MY_COLOR : playersColor;
    ctx.fillRect(CLOUD_X + COLUMN_GAP * (i + 1) + COLUMN_WIDTH * i, CLOUD_X + BAR_HEIGHT - BAR_HEIGHT * Math.round(times[i]) / maxTime, COLUMN_WIDTH, BAR_HEIGHT * Math.round(times[i]) / maxTime);
    ctx.fillStyle = TEXT_COLOR;
    ctx.fillText(names[i], CLOUD_X + COLUMN_GAP * (i + 1) + COLUMN_WIDTH * i, CLOUD_X + GAP + BAR_HEIGHT);
  }
};
