//"use strict";

Fulgens = {};
Fulgens.timeoutIDs = [];
Fulgens.intervalIDs = [];

/**
 * @param {function} theFunction
 * @param {int} timeout number of ms 
 * @returns {int} timeoutID
 */
Fulgens.setTimeout = function(theFunction, timeout){
    var timeoutID = window.setTimeout(theFunction, timeout);
    Fulgens.timeoutIDs.push(timeoutID);
    return timeoutID;
};

/**
 * @param {function} theFunction
 * @param {int} delay number of ms 
 * @returns {int} intervalID
 */
Fulgens.setInterval = function(theFunction, delay){
    var intervalID = window.setInterval(theFunction, delay);
    Fulgens.intervalIDs.push(intervalID);
    return intervalID;
};

/**
 * @param {int} timeoutID
 */
Fulgens.clearTimeout = function(timeoutID){
    window.setInterval(timeoutID);
    var index = Fulgens.timeoutIDs.indexOf(timeoutID);
    if (index !== -1) Fulgens.timeoutIDs.splice(index, 1);
};

/**
 * @param {int} intervalID
 */
Fulgens.clearInterval = function(intervalID){
    window.clearInterval(intervalID);
    var index = Fulgens.intervalIDs.indexOf(intervalID);
    if (index !== -1) Fulgens.intervalIDs.splice(index, 1);
};

/**
 * @returns {void}
 */
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