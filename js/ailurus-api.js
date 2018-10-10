
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
        "url": this.url + "instructions",
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
        "url": this.url + "playerContext",
        "data": JSON.stringify(login),
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
        "url": this.url + "createPlayer",
        "data": JSON.stringify(login),
        "contentType": 'application/json',
        "dataType": 'json',
        "success": success
    });
}

AilurusApi.prototype.map = function (success) {
    $.ajax({
        "type": "GET",
        "url": this.url + "map",
        "contentType": 'application/json',
        "dataType": 'json',
        "success": success
    });
}
