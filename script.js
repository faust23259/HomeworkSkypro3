// Задание 1

let password = 'qwerty';
let passwordCheck = prompt('Введите пароль');
if (passwordCheck === password) {
    console.log('Пароль введен верно');
} else {
    console.log('Пароль введен не верно');
};

// Задание 2

let c = 14;

if (c > 0 && c < 10) {
    console.log('True');
} else {
    console.log('False');
}

c = 0;
if (c > 0 && c < 10) {
    console.log('True');
} else {
    console.log('False');
}

c = 10;
if (c > 0 && c < 10) {
    console.log('True');
} else {
    console.log('False');
}

c = -3;
if (c > 0 && c < 10) {
    console.log('True');
} else {
    console.log('False');
}

c = 2;
if (c > 0 && c < 10) {
    console.log('True');
} else {
    console.log('False');
}

// Задание 3

let d = 46;
let e = 64;
if (d > 100 || e > 100) {
    console.log('True');
} else {
    console.log('False');
}

// Задание 4

let a = 2;
let b = Number('3');
console.log(a + b);

// Задание 5

let monthNumber = 12;
let monthNumberAnswer = Number(prompt('Укажите порядковый номер месяца'));

switch (monthNumber = monthNumberAnswer) {
    case 12:
    case 1:
    case 2:
        console.log('Winter');
        break;
    case 3:
    case 4:
    case 5:
        console.log('Spring');
        break;
    case 6:
    case 7:
    case 8:
        console.log('Summer');
        break;
    case 9:
    case 10:
    case 11:
        console.log('Autumn');
        break;
    default:
        console.log('Error');
        break;
}

// Задание 6

// В repo HomeworkSkypro

// Задание 7

let checkNumber = prompt("Пожалуйста, введите любое число");

if (!isNaN(checkNumber)) {
    if (checkNumber % 2 == 0) {
        console.log("Число четное");
    } else {
        console.log("Число не четное");
    }
} else {
    console.log(NaN);
}

// Задание 8 - 9

let clientOS = prompt("Какую OS Вы используете? (0 — iOS, 1 — Android)");

let clientDeviceYear = 2015;

if (clientOS == 0) {
    alert("Установите версию приложения для iOS по ссылке");
    clientDeviceYearCheck = prompt("Укажите год выпуска смартфона")
    if (clientDeviceYearCheck < clientDeviceYear) {
        console.log("Установите облегченную версию приложения для iOS по ссылке")
    } else {
        console.log("Ссылка на установку");
    }
} else if (clientOS == 1) {
    alert("Установите версию приложения для Android по ссылке");
    clientDeviceYearCheck = prompt("Укажите год выпуска смартфона")
    if (clientDeviceYearCheck < clientDeviceYear) {
        console.log("Установите облегченную версию приложения для Android по ссылке");
    } else {
        console.log("Ссылка на установку");
    }
}
else if (clientOS != 1 || clientOS != 0) {
    console.log("Не верное значение");
}