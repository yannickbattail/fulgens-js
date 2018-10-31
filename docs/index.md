# Fulgens

## Ailurus Api

### get the map

```javascript
AilurusApi.map(success);
```

*success* is a function that take the maps as parameter. This function is called when the received with success from the Ailurus

Example:
```javascript
AilurusApi.map(function(theMap){
  console.log(theMap);
});
```

It return and object that describe the map and the item it contain.

```json
{
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
		"x": 20,
		"y": 10
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
			"quantity": 30
		}
	]
}

```

- droneSpawnPoint: is the point where new drones starts

- resourceGoal: a list of resource type and quantity to validate the level

- mines: list of mines with their positions and type of resources

- factories: list of factories with their positions

### get the player context

```javascript
AilurusApi.playerContext(success);
```

success is a function that take the playerContext as parameter. This function is called when the recieved with success from the Ailurus

Example:
```javascript
AilurusApi.playerContext(function(player){
  console.log(player);
});
```

It return and object that describe the player and its drones.

```json
{
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
	"playerName": "RedPanda",
	"resources": [
		{
			"resource": "Gold",
			"quantity": 10
		}
	],
	"goalAchieved": false
}
```

### send instructions to drones

```javascript
AilurusApi.instructions(instructions, success);
```

success is a function that take the playerContext as parameter. This function is called when the recieved with success from the Ailurus

Example:
```javascript
var instructions = [
	{
		'TYPE': 'Collect',
		'DroneName': 'Drone_1',
		'Destination': null
	},
	{
		'TYPE': 'Unload',
		'DroneName': 'Drone_2',
		'Destination': null
	},
	{
		'TYPE': 'MoveTo',
		'DroneName': 'Drone_3',
		'Destination': {"X":45, "Y":45}
	},
];
AilurusApi.instructions(instructions, function(instructionsStatus){
  console.log(instructionsStatus);
});
```

It return an Array: a status message for each instructions.

#### instruction

- TYPE: can be 'Collect', 'Unload' or 'MoveTo'
- DroneName: the drone the instruction is for
- Destination: for an instruction of type MoveTo, it is the coordinate X,Y of the destination

## Fulgens Api



## example of IA

```javascript
function logResult(response) {
    console.log(response);
}
var minePosition = {x:0,y:0};
var factoryPosition = {x:0,y:0};

ailurusApi.map(function(theMap){
  console.log(theMap);
  minePosition = theMap.mines[0].position;
  factoryPosition = theMap.factories[0].position;
  start();
});

function Collect(drone)
{
    var instruction = {
        'TYPE': 'Collect',
        'DroneName': drone,
        'Destination': null
    };
    ailurusApi.instructions([instruction], logResult);
}
function MoveToMine(drone)
{
    var instruction = {
        'TYPE': 'MoveTo',
        'DroneName': drone,
        'Destination': minePosition
    };
    ailurusApi.instructions([instruction], logResult);
}
function MoveToFactory(drone)
{
    var instruction = {
        'TYPE': 'MoveTo',
        'DroneName': drone,
        'Destination': factoryPosition
    };
    ailurusApi.instructions([instruction], logResult);
}
function Unload(drone)
{
    var instruction = {
        'TYPE': 'Unload',
        'DroneName': drone,
        'Destination': null
    };
    ailurusApi.instructions([instruction], logResult);
}

function drone1Collect(drone){
    Collect('Drone_1');
}
function drone1MoveToMine(drone){
    MoveToMine('Drone_1');
}
function drone1MoveToFactory(drone){
    MoveToFactory('Drone_1');
}
function drone1Unload(drone){
    Unload('Drone_1');
}

function drone2Collect(drone){
    Collect('Drone_2');
}
function drone2MoveToMine(drone){
    MoveToMine('Drone_2');
}
function drone2MoveToFactory(drone){
    MoveToFactory('Drone_2');
}
function drone2Unload(drone){
    Unload('Drone_2');
}

function start() {

    drone1MoveToMine();
    // in 2min drone1 will Collect
    Fulgens.setTimeout(drone1Collect, 2*60*1000); // 2min in ms
    // in 2min and 10s drone1 will Move To Factory
    Fulgens.setTimeout(drone1MoveToFactory, 2*60*1000 + 10*1000);
    // in 2min and 10s and 2min drone1 will Unload
    Fulgens.setTimeout(drone1Unload, 2*60*1000 + 10*1000 + 2*60*1000);

    drone2MoveToMine();
    // in 2min drone2 will Collect
    Fulgens.setTimeout(drone2Collect, 2*60*1000); // 2min in ms
    // in 2min and 10s drone2 will Move To Factory
    Fulgens.setTimeout(drone2MoveToFactory, 2*60*1000 + 10*1000);
    // in 2min and 10s and 2min drone2 will Unload
    Fulgens.setTimeout(drone2Unload, 2*60*1000 + 10*1000 + 2*60*1000);
}

```
