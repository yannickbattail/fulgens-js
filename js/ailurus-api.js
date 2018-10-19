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
 * @param {object} instructions
 * @returns {Array.<string>} status message of each instructions
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
 * @param {function.<Array.<string>>} success
 * @param {function.<string>} error
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
 * @param {function.<Array.<string>>} success
 * @param {function.<string>} error
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
 * @param {function.<Array.<string>>} success
 * @param {function.<string>} error
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

/**
 * @returns {object} the map
 */
AilurusApi.prototype.syncMap = function () {
    return $.ajax({
        "type": "GET",
        "url": this.url + "map",
        "contentType": 'application/json',
        "dataType": 'json',
        "async": false
    });
};

/**
 * 
 * @param {function.<Array.<string>>} success
 * @param {function.<string>} error
 */
AilurusApi.prototype.map = function (success, error) {
    $.ajax({
        "type": "GET",
        "url": this.url + "map",
        "contentType": 'application/json',
        "dataType": 'json',
        "success": success,
        "error" : error
    });
};
