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
