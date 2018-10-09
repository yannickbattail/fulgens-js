
function AilurusMockedApi(url, playerName, pass) {
}

AilurusMockedApi.prototype.instructions = function (instructions, success) {
    var instructionsResult = [
        "ok, mocked instruction1",
        "ok, mocked instruction2"
    ];
    setTimeout(function() {
        console.log(instructionsResult);
        success(instructionsResult);
    }, 1000);
}

AilurusMockedApi.prototype.playerContext = function (success) {
    var playerCtx = {
        "drones": [
            {
                "name": "Drone_1",
                "lastInstruction": null,
                "currentPosition": {
                    "x": 1,
                    "y": 1
                },
                "state": 1,
                "speed": 1,
                "storageSize": 10,
                "storage": null
            },
            {
                "name": "Drone_2",
                "lastInstruction": null,
                "currentPosition": {
                    "x": 1,
                    "y": 1
                },
                "state": 1,
                "speed": 1,
                "storageSize": 10,
                "storage": null
            }
        ],
        "playerName": "RedPanda",
        "resources": []
    };
    setTimeout(function() {
        success(playerCtx);
    }, 1000);
}

AilurusMockedApi.prototype.map = function (success) {
    var map = {
        "name": "lvl1",
        "dimensions": {
            "item1": {
                "x": 0,
                "y": 0
            },
            "item2": {
                "x": 100,
                "y": 100
            }
        },
        "droneSpawnPoint": {
            "x": 1,
            "y": 1
        },
        "items": [
            {
                "type": "MainBuilding",
                "name": "Home",
                "position": {
                    "x": 2,
                    "y": 2
                }
            },
            {
                "type": "Mine",
                "name": "Gold Mine",
                "position": {
                    "x": 98,
                    "y": 98
                },
                "resourceType": 0
            }
        ]
    };
    setTimeout(function() {
        success(map);
    }, 1000);
}
