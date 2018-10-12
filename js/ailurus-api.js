"use strict";

function AilurusApi(url, playerName, pass) {
    this.url = "http://localhost:5000/";
    if (url) {
        this.url = url;
    }
    this.playerName = playerName;
    this.pass = pass;
};

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
