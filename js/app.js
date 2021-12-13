//variable, array, obj, function

let myName = "commGom";

console.log(`hello My name is ${myName}`);

const daysOfWeek = ['MON', 'TUE', 'WED', 'THUR', 'FRI', 'SAT'];
console.log(daysOfWeek)
daysOfWeek.push('SUN');
console.log(daysOfWeek);

// const playerName = "commGom";
const playerPoints = 121212;
const playerHandsome = false;
const playerFat = "little bit";

const player = { playerName: "commGom", playerPoints, playerHandsome, playerFat };
console.log(player);
player["playerPoints"] = 343434;
console.log(player);
const { playerName } = player;
console.log(`playerName is ${playerName}`);

function sayHello(name) {
    console.log(`Hello!~ My name is ${name}`);
}

sayHello(playerName);

function plus(firstNumber, secondNumber) {
    console.log(firstNumber + secondNumber);
}

plus(8, 60);

const player2 = {
    name: 'commGom',
    sayHello: function (otherPersonName) {
        console.log(`Hello ${otherPersonName}~ My name is ${this.name}`);
    }
}

player2.sayHello('Nico');


const calculator = {
    plus: (a, b) => a + b,
    minus: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: function (a, b) {
        return a / b;
    },
    power: (a, b) => { return a ** b; }
};

console.log(typeof calculator);
let data = 10;
console.log(isNaN(data));
data = "10";
console.log(isNaN(data));
data = "str"
console.log(isNaN(data));
console.log(calculator.plus(2, 5));
console.log(calculator.minus(5, 2));
console.log(calculator.multiply(2, 5));
console.log(calculator.divide(2, 5));
console.log(calculator.power(2, 5));

