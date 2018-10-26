"use strict";

function AilurusMockedApi(url, playerName, pass) {
}

AilurusMockedApi.prototype.syncInstructions = function (instructions) {
    var instructionsResult = [
        "ok, mocked instruction1",
        "ok, mocked instruction2"
    ];
    setTimeout(function() {
        console.log(instructionsResult);
        success(instructionsResult);
    }, 1000);
};
AilurusMockedApi.prototype.instructions = function (instructions, success, error) {
    var that = this;
    setTimeout(function() {
        success(that.syncInstructions());
    }, 1000);
};

AilurusMockedApi.prototype.syncPlayerContext = function () {
    return {
        "drones": [
            {
                "name": "Drone_1",
                "lastInstruction": null,
                "currentPosition": {
                    "x": 20,
                    "y": 10
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
                    "x": 10,
                    "y": 15
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
};

AilurusMockedApi.prototype.playerContext = function (success, error) {
    var that = this;
    setTimeout(function() {
        success(that.syncPlayerContext());
    }, 1000);
};
AilurusMockedApi.prototype.createPlayer = function (success) {
    var that = this;
    setTimeout(function() {
        success(that.syncPlayerContext());
    }, 1000);
};

AilurusMockedApi.prototype.syncMap = function (success) {
    return {
        "name": "lvl1",
        "dimensions": {
            "item1": {
                "x": 0,
                "y": 0
            },
            "item2": {
                "x": 50,
                "y": 50
            }
        },
        "droneSpawnPoint": {
            "x": 15,
            "y": 10
        },
        "resourceGoal": [
            {
                "quantity": 30,
                "resource": "gold"
            }
        ],
        "mines": [
            {
                "type": "Mine",
                "name": "Home",
                "position": {
                    "x": 45,
                    "y": 45
                }
            }
        ],
        "factories": [
            {
                "type": "Factory",
                "name": "Factory",
                "position": {
                    "x": 4,
                    "y": 4
                },
                "resourceType": 0
            }
        ]
    };
};

AilurusMockedApi.prototype.map = function (success, error) {
    var that = this;
    setTimeout(function() {
        success(that.syncMap());
    }, 1000);
};
