'use strict';

var WIZARDS_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Люпита', 'Вашингтон', 'Юлия'];
var WIZARDS_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Харя-Потный', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101,137,164)', 'rgb(241, 43, 107)', 'rgb(146,100,161)', 'rgb(56, 159, 117)', 'rgb(215,210,55)', 'rgb(0,0,0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

function getRandomArbitrary(min, max) {
  var rand = Math.floor(Math.random() * (max - 1 + 1 - min));
  return rand;
}

var wizards = [
  {
    name: WIZARDS_NAMES[getRandomArbitrary(0, WIZARDS_NAMES.length)] + ' ' + WIZARDS_SURNAMES[getRandomArbitrary(0, WIZARDS_SURNAMES.length)],
    coatColor: COAT_COLOR[getRandomArbitrary(0, COAT_COLOR.length)],
    eyesColor: EYES_COLOR[getRandomArbitrary(0, EYES_COLOR.length)]
  },
  {
    name: WIZARDS_NAMES[getRandomArbitrary(0, WIZARDS_NAMES.length)] + ' ' + WIZARDS_SURNAMES[getRandomArbitrary(0, WIZARDS_SURNAMES.length)],
    coatColor: COAT_COLOR[getRandomArbitrary(0, COAT_COLOR.length)],
    eyesColor: EYES_COLOR[getRandomArbitrary(0, EYES_COLOR.length)]
  },
  {
    name: WIZARDS_NAMES[getRandomArbitrary(0, WIZARDS_NAMES.length)] + ' ' + WIZARDS_SURNAMES[getRandomArbitrary(0, WIZARDS_SURNAMES.length)],
    coatColor: COAT_COLOR[getRandomArbitrary(0, COAT_COLOR.length)],
    eyesColor: EYES_COLOR[getRandomArbitrary(0, EYES_COLOR.length)]
  },
  {
    name: WIZARDS_NAMES[getRandomArbitrary(0, WIZARDS_NAMES.length)] + ' ' + WIZARDS_SURNAMES[getRandomArbitrary(0, WIZARDS_SURNAMES.length)],
    coatColor: COAT_COLOR[getRandomArbitrary(0, COAT_COLOR.length)],
    eyesColor: EYES_COLOR[getRandomArbitrary(0, EYES_COLOR.length)]
  }
];
// debugger;

// показать окно параметров персонажа
document.querySelector('.setup').classList.remove('hidden');
//

// показать блок похожих персонажей
document.querySelector('.setup-similar').classList.remove('hidden');
//

var similarWizardElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var similarWizardName = document.querySelector('.setup-similar-label');


for (var i = 0; i < 4; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;
  similarWizardElement.appendChild(wizardElement);
}

// console.dir(similarWizardTemplate.querySelector('.wizard-eyes'));
