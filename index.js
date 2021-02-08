// Your code here
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(str="*") {
    return function(adjective="special") {
        return `You are ${str}${adjective}${str}!`
    }
}

let Calculator = {
    add: function(a,b) {
        return a+b
    }, 
    subtract: (a,b) => a-b, 
    multiply: (a, b) => a * b, 
    divide: (a,b) => a/b
};

function actionApplyer(start, arr) {
    let num = start;
    arr.forEach((fn) => num = fn(num))
    return num
}