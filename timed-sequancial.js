
function logResult(response) {
	$('#out').html(response);
}

function collect(droneName)
{
	var instruction = {
		'TYPE': 'Collect',
		'DroneName': droneName,
		'Destination': null
	};
	ailurusApi.instructions([instruction], logResult);
}

function unload(droneName)
{
	var instruction = {
		'TYPE': 'Unload',
		'DroneName': droneName,
		'Destination': null
	};
	ailurusApi.instructions([instruction], logResult);
}

function gotoMine(droneName)
{
	var instruction = {
		'TYPE': 'MoveTo',
		'DroneName': droneName,
		'Destination': {X: 98, Y:98}
	};
	ailurusApi.instructions([instruction], logResult);
}

function gotoHome(droneName)
{
	var instruction = {
		'TYPE': 'MoveTo',
		'DroneName': droneName,
		'Destination': {X: 2, Y:2}
	};
	ailurusApi.instructions([instruction], logResult);
}
gotoMine('Drone_1');
gotoMine('Drone_2');
Fulgens.setTimeout(() => collect('Drone_1'), 136*1000);
Fulgens.setTimeout(() => collect('Drone_2'), 136*1000);
Fulgens.setTimeout(() => gotoHome('Drone_1'), 142*1000);
Fulgens.setTimeout(() => gotoHome('Drone_2'), 142*1000);
Fulgens.setTimeout(() => unload('Drone_1'), 280*1000);
Fulgens.setTimeout(() => unload('Drone_2'), 280*1000);

	  