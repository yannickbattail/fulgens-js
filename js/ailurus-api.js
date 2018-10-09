
function AilurusApi(url, playerName, pass) {
    this.url = "http://localhost:5000/";
    if (url) {
        this.url = url;
    }
    this.playerName = playerName;
    this.pass = pass;
}

AilurusApi.prototype.instructions = function (instructions, success) {
    var instructionSet = {
        "Login": {
            "PlayerName": this.playerName,
            "Pass": this.pass
        },
        "Instructions": instructions
    };
    $.ajax({
        "type": "POST",
        "url": URL_PREFIX + "instructions",
        "data": JSON.stringify(instructionSet),
        "contentType": 'application/json',
        "dataType": 'json',
        "success": success
    });
}

AilurusApi.prototype.playerContext = function (success) {
    var login = {
        "PlayerName": this.playerName,
        "Pass": this.pass
    };
    $.ajax({
        "type": "POST",
        "url": URL_PREFIX + "playerContext",
        "data": JSON.stringify(Login),
        "contentType": 'application/json',
        "dataType": 'json',
        "success": success
    });
}
AilurusApi.prototype.createPlayer = function (success) {
    var login = {
        "PlayerName": this.playerName,
        "Pass": this.pass
    };
    $.ajax({
        "type": "POST",
        "url": URL_PREFIX + "createPlayer",
        "data": JSON.stringify(Login),
        "contentType": 'application/json',
        "dataType": 'json',
        "success": success
    });
}

AilurusApi.prototype.map = function (success) {
    $.ajax({
        "type": "GET",
        "url": URL_PREFIX + "map",
        "contentType": 'application/json',
        "dataType": 'json',
        "success": success
    });
}
