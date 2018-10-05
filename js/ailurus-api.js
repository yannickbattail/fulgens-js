
function AilurusApi(url) {
    this.url = "http://localhost:5000/";
    if (url) {
        this.url = url;
    }
}

AilurusApi.prototype.instructions = function (instructions, success) {
    $.ajax({
        "type": "POST",
        "url": URL_PREFIX + "instructions",
        "data": JSON.stringify(instructions),
        "contentType": 'application/json',
        "dataType": 'json',
        "success": success
    });
}

AilurusApi.prototype.playerContext = function (success) {
    $.ajax({
        "type": "GET",
        "url": URL_PREFIX + "playerContext",
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
