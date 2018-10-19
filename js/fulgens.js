//"use strict";

Fulgens = {};
Fulgens.timeoutIDs = [];
Fulgens.intervalIDs = [];
Fulgens.setTimeout = function(theFunction, timeout){
    var timeoutID = window.setTimeout(theFunction, timeout);
    Fulgens.timeoutIDs.push(timeoutID);
    return timeoutID;
};
Fulgens.setInterval = function(theFunction, delay){
    var intervalID = window.setInterval(theFunction, delay);
    Fulgens.intervalIDs.push(intervalID);
    return intervalID;
};
Fulgens.clearTimeout = function(timeoutID){
    window.setInterval(timeoutID);
    var index = Fulgens.timeoutIDs.indexOf(timeoutID);
    if (index !== -1) Fulgens.timeoutIDs.splice(index, 1);
};
Fulgens.clearInterval = function(intervalID){
    window.clearInterval(intervalID);
    var index = Fulgens.intervalIDs.indexOf(intervalID);
    if (index !== -1) Fulgens.intervalIDs.splice(index, 1);
};
Fulgens.clearAll = function() {
    for (const timeoutID of Fulgens.timeoutIDs) {
        window.clearTimeout(timeoutID);
    }
    Fulgens.timeoutIDs = [];
    for (const intervalID of Fulgens.intervalIDs) {
        window.clearInterval(intervalID);
    }
    Fulgens.intervalIDs = [];
};
/*
Fulgens.sleep = await function(miliseconds) {
    var sleeping = function(miliseconds) {
        return new Promise(resolve => setTimeout(resolve, miliseconds));
    };
    console.log('Taking a break...');
    await sleeping(miliseconds);
    console.log('Two seconds later');
};
*/