let title = prompt('Как называется ваш проект?', 'Название').trim();
let screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');
let screenPrice = +prompt('Сколько будет стоить данная работа?', 12000);
let rollback = 20;
let adaptive = confirm('Нужен ли адаптив на сайте?');
let service1 = prompt('Какой дополнительный тип услуги нужен?', 'Анимация');
let servicePrice1 = +prompt('Какой дополнительный тип услуги нужен?', 2000);
let service2 = prompt('Какой дополнительный тип услуги нужен?', 'Метрика');
let servicePrice2 = +prompt('Какой дополнительный тип услуги нужен?', 1000);

let allServicePrices = 0;
let fullPrice = 0;
let servicePercentPrice = 0;


const getTitle = function(str) {
   return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

const getAllServicePrices = function(price1, price2) {
   return price1 + price2;
}

const getServicePercentPrices = function(price, percent) {
   return Math.ceil(price - (price * (percent / 100)));
}

const showTypeOf = function(variable) {
   return variable + ': ' + typeof variable;
}

const getRollbackMessage = function(price) {
   if (price < 0) {
      return 'Что то пошло не так';
   }
   
   if (price > 30000) {
      return 'Даем скидку в 10%';
   }
   
   if (price > 15000 && price <= 30000) {
      return 'Даем скидку в 5%';
   }
   
   if(price >= 0 && price <= 15000) {
      return 'Скидка не предусмотрена';
   }
}

function getFullPrice(price, servicesPrice) {
   return price + servicesPrice;
}

// условия для скидки

allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);
fullPrice = getFullPrice(screenPrice, allServicePrices);
servicePercentPrice = getServicePercentPrices(fullPrice, rollback);

// тип данных переменных
console.log(showTypeOf(title));
console.log(showTypeOf(fullPrice));
console.log(showTypeOf(adaptive));

// сообщение о скидке
console.log(getRollbackMessage(fullPrice));

// массив из строки screens
screens = screens.toLowerCase().split(',');
console.log(screens);

console.log('Процент отката посреднику за работу ' + (fullPrice - servicePercentPrice));