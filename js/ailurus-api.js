"use strict";

/**
 * @constructor
 * @param {string} url 
 * @param {string} playerName 
 * @param {string} pass 
 */
function AilurusApi(url, playerName, pass) {
    this.url = "http://localhost:5000/";
    if (url) {
        this.url = url;
    }
    this.playerName = playerName;
    this.pass = pass;
};

/**
 * @param {Array} Array of instructions
 * @returns {Array} status message of each instructions
 * @deprecated use instructions()
 */
AilurusApi.prototype.syncInstructions = function (instructions) {
    var instructionSet = {
        "Login": {
            "PlayerName": this.playerName,
            "Pass": this.pass
        },
        "Instructions": instructions
    };
    return $.ajax({
        "type": "POST",
        "url": this.url + "instructions",
        "data": JSON.stringify(instructionSet),
        "contentType": 'application/json',
        "dataType": 'json',
        "async": false
    });
};

/**
 * @param {object} instructions
 * @param {function} success
 * @param {function} error
 */
AilurusApi.prototype.instructions = function (instructions, success, error) {
    var instructionSet = {
        "Login": {
            "PlayerName": this.playerName,
            "Pass": this.pass
        },
        "Instructions": instructions
    };
    $.ajax({
        "type": "POST",
        "url": this.url + "instructions",
        "data": JSON.stringify(instructionSet),
        "contentType": 'application/json',
        "dataType": 'json',
        "success": success,
        "error" : error
    });
};

/**
 * @returns {object} PlayerContext
 * @deprecated use playerContext()
 */
AilurusApi.prototype.syncPlayerContext = function () {
    var login = {
        "PlayerName": this.playerName,
        "Pass": this.pass
    };
    return $.ajax({
        "type": "POST",
        "url": this.url + "playerContext",
        "data": JSON.stringify(login),
        "contentType": 'application/json',
        "dataType": 'json',
        "async": false
    });
};

/**
 * 
 * @param {function} success
 * @param {function} error
 */
AilurusApi.prototype.playerContext = function (success, error) {
    var login = {
        "PlayerName": this.playerName,
        "Pass": this.pass
    };
    $.ajax({
        "type": "POST",
        "url": this.url + "playerContext",
        "data": JSON.stringify(login),
        "contentType": 'application/json',
        "dataType": 'json',
        "success": success,
        "error" : error
    });
};

/**
 * 
 * @param {function} success
 * @param {function} error
 */
AilurusApi.prototype.createPlayer = function (success, error) {
    var login = {
        "PlayerName": this.playerName,
        "Pass": this.pass
    };
    $.ajax({
        "type": "POST",
        "url": this.url + "createPlayer",
        "data": JSON.stringify(login),
        "contentType": 'application/json',
        "dataType": 'json',
        "success": success,
        "error" : error
    });
};

AilurusApi.prototype.changeLevel = function (level, success, error) {
    var login = {
        "Login": {
            "PlayerName": this.playerName,
            "Pass": this.pass
        },
        "level": level
    };
    $.ajax({
        "type": "POST",
        "url": this.url + "changeLevel",
        "data": JSON.stringify(login),
        "contentType": 'application/json',
        "dataType": 'json',
        "success": success,
        "error" : error
    });
};

/**
 * @returns {object} the map
 * @deprecated use map()
 */
AilurusApi.prototype.syncMap = function () {
    var login = {
        "PlayerName": this.playerName,
        "Pass": this.pass
    };
    return $.ajax({
        "type": "POST",
        "url": this.url + "map",
        "data": JSON.stringify(login),
        "contentType": 'application/json',
        "dataType": 'json',
        "async": false
    });
};

/**
 * 
 * @param {function} success
 * @param {function} error
 */
AilurusApi.prototype.map = function (success, error) {
    var login = {
        "PlayerName": this.playerName,
        "Pass": this.pass
    };
    $.ajax({
        "type": "POST",
        "url": this.url + "map",
        "data": JSON.stringify(login),
        "contentType": 'application/json',
        "dataType": 'json',
        "success": success,
        "error" : error
    });
};
