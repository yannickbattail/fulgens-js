"use strict";

function Gui() {

    function doIt() {
        var instruction = {};
        instruction['TYPE'] = $('#TYPE').val();
        instruction['DroneName'] = $('#Drone').val();
        if (instruction['TYPE'] === 'MoveTo') {
            var destination = $('#Destination').val().split(',', 2);
            instruction['Destination'] = {"X":destination[0], "Y":destination[1]};
        } else {
            instruction['Destination'] = null;
        }

        var data = [instruction];
        ailurusApi.instructions(data, function (response) {
            $('#out').html(response);
        });
    }

    function startGui() {
        $('#loginBox').hide();
        $('#gui').show();
        ailurusApi.map(function (response) {
            map = response;
            displayGoal(map);
            setTimeout(loopGui, 50);
        });
    }

    function loopGui() {
        ailurusApi.playerContext(function (response) {
            //console.log(response);
            playerContext = response;
            fulgensMap.drawMap(map, playerContext);
            displayStatsDrones(playerContext.drones);
            displayPlayerContext(playerContext);
            $('#lastUpdate').html('Last update: ' + formatDate(new Date()));
            setTimeout(loopGui, repeat);
        });

    }

    function formatNum(num){
        return Math.round(num*10)/10;
    }

    function formatCoord(coord){
        if (coord == null) {
            return ' - ';
        }
        return coord.x+';'+coord.y;
    }

    function formatStrorage(st){
        if (st == null) {
            return ' - ';
        }
        return st.quantity+' '+st.resource ;
    }

    function formatDate(d){
        if (d == null) {
            return ' - ';
        }
        var date = new Date(d);
        return date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
    }

    function formatProgress(num){
        var s =  Math.round(num*100);
        return '<div class="progressBar">' +
            '<div class="progressBarIn" style="width:'+s+'px;">'+s+'&nbsp;%</div>' +
            '</div>';
    }

    function displayStatsDrones(drones){
        var html = "<table>";
        html += "<tr>";
        html += "   <th>Name<th>";
        html += "   <th>Position<th>";
        html += "   <th>Speed<th>";
        html += "   <th>State<th>";
        html += "   <th>Storage size<th>";
        html += "   <th>Storage<th>";
        html += "   <th>lastInstruction<th>";
        html += "   <th>progression<th>";
        html += "   <th>destination<th>";
        html += "   <th>distance<th>";
        html += "   <th>duration<th>";
        html += "   <th>startedAt<th>";
        html += "   <th>endAt<th>";
        html += "   <th>abortedAt<th>";
        html += "</tr>";
        for (var droneIndex = 0; droneIndex < drones.length; droneIndex++) {
            var drone = drones[droneIndex];
            html += "<tr>";
            html += "   <td>"+drone.name+"<td>";
            html += "   <td>"+formatCoord(drone.currentPosition)+"<td>";
            html += "   <td>"+drone.speed+"<td>";
            html += "   <td>"+drone.state+"<td>";
            html += "   <td>"+drone.storageSize+"<td>";
            html += "   <td>"+formatStrorage(drone.storage)+"<td>";
            if (drone.lastInstruction !== null){
            html += "   <td>"+drone.lastInstruction.type+"<td>";
            html += "   <td>"+formatProgress(drone.lastInstruction.progression)+"<td>";
            html += "   <td>"+formatCoord(drone.lastInstruction.destination)+"<td>";
            html += "   <td>"+formatNum(drone.lastInstruction.distance)+"<td>";
            html += "   <td>"+formatNum(drone.lastInstruction.duration)+"<td>";
            html += "   <td>"+formatDate(drone.lastInstruction.startedAt)+"<td>";
            html += "   <td>"+formatDate(drone.lastInstruction.endAt)+"<td>";
            html += "   <td>"+formatDate(drone.lastInstruction.abortedAt)+"<td>";
            } else {
                html += "   <td> - <td>";
                html += "   <td> - <td>";
                html += "   <td> - <td>";
                html += "   <td> - <td>";
                html += "   <td> - <td>";
                html += "   <td> - <td>";
                html += "   <td> - <td>";
                html += "   <td> - <td>";
            }
            html += "</tr>";
        }
        html += "</table>";
        
        $('#stats').html(html);
    }

    function displayPlayerContext(playerContext) {
        var html = "<table>";
        html += "<tr>";
        html += "   <th>Resources</th>";
        html += "</tr>";
        for (var resIndex = 0; resIndex < playerContext.resources.length; resIndex++) {
            var resource = playerContext.resources[resIndex];
            html += "<tr>";
            html += "   <td>"+formatStrorage(resource)+"<td>";
            html += "</tr>";
        }
        html += "<tr>";
        if (playerContext.goalAchieved) {
            html += "   <th><h3>Goal achieved!</h3></th>";
        } else {
            html += "   <th>Goal not yet achieved</th>";
        }
        html += "</tr>";
        html += "</table>";

        $('#playerContext').html(html);
    }

    function displayGoal(map) {
        var html = '<div id="mapDescription">'+map.description+"</div>";
        html += "<table>";
        html += "<tr>";
        html += "   <th>Goal</th>";
        html += "</tr>";
        for (var resIndex = 0; resIndex < map.resourceGoal.length; resIndex++) {
            var resource = map.resourceGoal[resIndex];
            html += "<tr>";
            html += "   <td>"+formatStrorage(resource)+"<td>";
            html += "</tr>";
        }
        html += "</table>";

        $('#goal').html(html);
    }

    function run() {
        Fulgens.clearAll();
        var code = $('#code').val();
        code  = '(function() { '+code+' }) ();';
        eval(code);
    }
    function stop() {
        Fulgens.clearAll();
    }
    function createPlayer() {
        //for tests use class: AilurusMockedApi
        //ailurusApi = new AilurusMockedApi("http://localhost:61218/",
        //    $('#playerName').val(), $('#pass').val());
        ailurusApi = new AilurusApi("http://localhost:61218/",
            $('#playerName').val(), $('#pass').val());

        ailurusApi.createPlayer(
            (response) => {
                startGui();
            },
            (responseErr) => {
                $('#loginBox').html(responseErr);
            }
        );
    }
    function login() {
        //for tests use class: AilurusMockedApi
        //ailurusApi = new AilurusMockedApi("http://localhost:61218/",
        //    $('#playerName').val(), $('#pass').val());
        ailurusApi = new AilurusApi($('#hurle').val(),
            $('#playerName').val(), $('#pass').val());

        ailurusApi.playerContext(
            (response) => {
                startGui();
            },
            (responseErr) => {
                $('#loginBox').html(responseErr);
            }
        );
    }

    var repeat = 2000;
    var map = {};
    var playerContext = {};
    var ailurusApi = {};
    var fulgensMap = new FulgensMap('canvas');

    $('#gui').hide();
    document.getElementById('doIt').onclick = doIt;
    document.getElementById('stop').onclick = stop;
    document.getElementById('run').onclick = run;
    document.getElementById('createPlayer').onclick = createPlayer;
    document.getElementById('login').onclick = login;

}
