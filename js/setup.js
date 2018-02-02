'use strict';

var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COATEDCOLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYESCOLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var wizardsQuantity = 4;

var wizards = [];

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var randomValue = function (number) {
  return Math.floor(Math.random() * number);
};

for (var i = 0; i < wizardsQuantity; i++) {
  wizards.push({name: NAMES[randomValue(NAMES.length)] + ' ' + SURNAMES[randomValue(SURNAMES.length)], coatColor: COATEDCOLORS[randomValue(COATEDCOLORS.length)], eyesColor: EYESCOLORS[randomValue(EYESCOLORS.length)]});
}

var generateWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var drawWizards = function () {
  var fragment = document.createDocumentFragment();
  for (i = 0; i < wizards.length; i++) {
    fragment.appendChild(generateWizard(wizards[i]));
  }
  return fragment;
};

similarListElement.appendChild(drawWizards());
document.querySelector('.setup-similar').classList.remove('hidden');
