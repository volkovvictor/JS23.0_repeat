const title = 'Название проекта';
const screenPrice = 2000;
const rollback = 20;
const fullPrice = 11300;
const adaptive = true;

let screens = 'Простые, Сложные, Интерактивные';


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