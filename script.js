const title = prompt('Как называется ваш проект?', 'Название');
let screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');
const screenPrice = +prompt('Сколько будет стоить данная работа?', 12000);
const rollback = 50;
const adaptive = confirm('Нужен ли адаптив на сайте?');
const service1 = prompt('Какой дополнительный тип услуги нужен?', 'Анимация');
const servicePrice1 = +prompt('Какой дополнительный тип услуги нужен?', 2000);
const service2 = prompt('Какой дополнительный тип услуги нужен?', 'Метрика');
const servicePrice2 = +prompt('Какой дополнительный тип услуги нужен?', 1000);

const fullPrice = screenPrice + servicePrice1 + servicePrice2;
const servicePercentPrice = Math.ceil(fullPrice - (fullPrice * (rollback / 100)));

console.log(servicePercentPrice);

// условия для скидки

if (fullPrice < 0) {
   console.log('Что то пошло не так');
}

if (fullPrice > 30000) {
   console.log('Даем скидку в 10%');
}

if (fullPrice > 15000 && fullPrice <= 30000) {
   console.log('Даем скидку в 5%');
}

if(fullPrice >= 0 && fullPrice <= 15000) {
   console.log('Скидка не предусмотрена');
}


// тип данных переменных
console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

// длина строки screens
console.log(screens.length)

console.log('Стоимость верстки экранов ' + screenPrice +
' рублей\nСтоимость разработки сайта ' + fullPrice + ' рублей');

// массив из строки screens
screens = screens.toLowerCase().split(',');
console.log(screens)

console.log('Процент отката посреднику за работу ' + fullPrice * (rollback/100));