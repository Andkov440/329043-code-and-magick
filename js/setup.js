'use strict';

var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COATED_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var WIZARDS_QUANTITY = 4;

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var wizards = [];

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplateElement = document.querySelector('#similar-wizard-template').content;

var randomValue = function (number) {
  return Math.floor(Math.random() * number);
};

var createWizardsData = function (wizardsArray) {
  for (var i = 0; i < WIZARDS_QUANTITY; i++) {
    wizardsArray.push({name: NAMES[randomValue(NAMES.length)] + ' ' + SURNAMES[randomValue(SURNAMES.length)], coatColor: COATED_COLORS[randomValue(COATED_COLORS.length)], eyesColor: EYES_COLORS[randomValue(EYES_COLORS.length)]});
  }
  return wizardsArray;
};

var generateWizard = function (wizard) {
  var wizardElement = similarWizardTemplateElement.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var drawWizards = function () {
  var fragment = document.createDocumentFragment();
  var wizardsData = createWizardsData(wizards);
  for (var i = 0; i < wizardsData.length; i++) {
    fragment.appendChild(generateWizard(wizardsData[i]));
  }
  return fragment;
};

similarListElement.appendChild(drawWizards());
document.querySelector('.setup-similar').classList.remove('hidden');

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var setupUserName = setup.querySelector('.setup-user-name');
var wizardCoat = document.querySelector('.wizard-coat');
var wizardEyes = document.querySelector('.wizard-eyes');
var setupFireballWrap = document.querySelector('.setup-fireball-wrap ');

var popupEscPressHandler = function (evt) {
  if (setupUserName === document.activeElement) {
    openPopup();
  } else {
    if (evt.keyCode === ESC_KEYCODE) {
      closePopup();
    }
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', popupEscPressHandler);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', popupEscPressHandler);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = COATED_COLORS[randomValue(COATED_COLORS.length)];
});

wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = EYES_COLORS[randomValue(EYES_COLORS.length)];
});

setupFireballWrap.addEventListener('click', function () {
  setupFireballWrap.style.background = FIREBALL_COLORS[randomValue(FIREBALL_COLORS.length)];
  console.log(setupFireballWrap.style.fill);
});
