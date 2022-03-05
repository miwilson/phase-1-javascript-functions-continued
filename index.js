// code your solution here
const activity = ''
function saturdayFun( activity= 'roller-skate'){
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = 'go to the office'){
    return `This Monday, I will ${activity}.`;
}

const emphatic = ''
const thing2 = ""
function wrapAdjective(emphatic = '*', thing2 = 'a hard worker'){
    const thing1 = 'You are';
    return function(thing2){
            return `${thing1} ${emphatic}${thing2}${emphatic}!`;
    }
}