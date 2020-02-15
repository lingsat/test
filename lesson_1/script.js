let money = prompt("Ваш бюджет на месяц");
let time = prompt("Введите дату в формате YYYY-MM-DD");

let outMoney = prompt("Введите обязательную статью расходов в этом месяце");
let outPrice = prompt("Во сколько обойдется?");
let income = [];


let appData = {
    budget: money,
    timeData: time,
    expenses: {
        outMoney : outPrice
    },
    optionalExpenses: "",
    income: "",
    savings: false
};

alert("Бюджет на 1 день " + money/30 + " грн.");