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
        "drones": [{
            "name": "Drone_1",
            "lastInstruction": {
              "destination": {
                "x": 2,
                "y": 2
              },
              "distance": 60.811183182043088,
              "duration": 60.811183182043088,
              "endAt": "2018-10-30T18:16:18.7572593+01:00",
              "type": "MoveTo",
              "startedAt": "2018-10-30T18:15:17.9462593+01:00",
              "progression": 1.0,
              "abortedAt": null,
              "isAborted": false
            },
            "currentPosition": {
              "x": 2,
              "y": 2
            },
            "state": "WaitingForOrders",
            "speed": 1.0,
            "storageSize": 10,
            "storage": {
              "resource": "Gold",
              "quantity": 10
            }
          }, {
            "name": "Drone_2",
            "lastInstruction": {
              "destination": {
                "x": 2,
                "y": 2
              },
              "distance": 60.811183182043088,
              "duration": 60.811183182043088,
              "endAt": "2018-10-30T18:16:14.6029791+01:00",
              "type": "MoveTo",
              "startedAt": "2018-10-30T18:15:13.7919791+01:00",
              "progression": 1.0,
              "abortedAt": null,
              "isAborted": false
            },
            "currentPosition": {
              "x": 2,
              "y": 2
            },
            "state": "WaitingForOrders",
            "speed": 1.0,
            "storageSize": 10,
            "storage": {
                "resource": "Gold",
                "quantity": 10
            }
          }
        ],
        "playerName": "c",
        "level": 1,
        "resources": [
            {
                "resource": "Gold",
                "quantity": 10
            }
        ],
        "isResourceGoalAchieved": false,
        "startTime": "2018-11-23T18:12:20.4374365+01:00",
        "timeWhenResoucesGoalIsAchieved": null,
        "spentTime": "-00:00:05.1235498",
        "isTimeGoalAchieved": true
      };
};

AilurusMockedApi.prototype.playerContext = function (success, error) {
    var that = this;
    setTimeout(function() {
        success(that.syncPlayerContext());
    }, 1000);
};

/**
 * change player level (map)
 * @param {int} level
 * @param {function} success
 * @param {function} error
 */
AilurusMockedApi.prototype.changeLevel = function (level, success, error) {
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
        "description": "mocked map",
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
        "mines": [{
            "type": "Mine",
            "name": "Gold Mine",
            "position": {
              "x": 45,
              "y": 45
            },
            "resourceType": "Gold"
          }
        ],
        "factories": [{
            "type": "Factory",
            "name": "Home",
            "position": {
              "x": 4,
              "y": 4
            }
          }
        ],
        "resourceGoal": [{
            "resource": "Gold",
            "quantity": 40
          }
        ],
        "timeLimitGoal": "00:05:00",
        "initialDrones": [
          {
            "name": "Drone_1",
            "speed": 1.0,
            "storageSize": 10,
            "initialPosition": {
              "x": 20,
              "y": 10
            },
            "storage": null,
            "state": "WaitingForOrders",
            "currentPosition": {
              "x": 20,
              "y": 10
            }
          },
          {
            "name": "Drone_2",
            "speed": 1.0,
            "storageSize": 10,
            "initialPosition": {
              "x": 21,
              "y": 11
            },
            "storage": null,
            "state": "WaitingForOrders",
            "currentPosition": {
              "x": 21,
              "y": 11
            }
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
