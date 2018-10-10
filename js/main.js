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

    function inLoop() {
        ailurusApi.playerContext(function (response) {
            console.log(response);
            playerContext = response;
            clear();
            drawMainBuilding(map.items[0].position);
            drawMine(map.items[1].position);
            drawDrone(playerContext.drones[0].currentPosition);
            drawDrone(playerContext.drones[1].currentPosition);
            displayStatsDrones(playerContext.drones);
            displayPlayerContext(playerContext);
            $('#lastUpdate').html('Last update: ' + new Date().getTime());
            setTimeout(inLoop, repeat);
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
        return '<div style="width:100px; background-color: white">' +
            '<div style="width:'+s+'px; background-color: blue">'+s+' %</div>' +
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
        html += "</table>";

        $('#playerContext').html(html);
    }

    function clear() {
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, 100, 100);
    }

    function drawMainBuilding(coord){
        ctx.fillStyle = 'green';
        ctx.fillRect(coord.x, coord.y, 1, 1);
    }

    function drawMine(coord){
        ctx.fillStyle = 'red';
        ctx.fillRect(coord.x, coord.y, 1, 1);
    }

    function drawDrone(coord){
        ctx.fillStyle = 'blue';
        ctx.fillRect(coord.x, coord.y, 1, 1);
    }

    function run() {
        var code = $('#code').val();
        code  = '(function() { '+code+' }) ();';
        eval(code);
    }
    function run() {
        Fulgens.clearAll();
    }
    
    var ailurusApi = new AilurusMockedApi("http://localhost:5000/");
    //var ailurusApi = new AilurusApi("http://localhost:5000/", "panda", "roux");
    ailurusApi.createPlayer(function (response) {
        $('#out').html(response);
    });

    var ctx = document.getElementById('canvas').getContext('2d');
    document.getElementById('doIt').onclick = doIt;
    document.getElementById('stop').onclick = stop;
    document.getElementById('run').onclick = run;
    document.getElementById('createPlayer').onclick = run;
    
    var repeat = 2000;
    var map = {};
    var playerContext = {};
    ailurusApi.map(function (response) {
        map = response;
        setTimeout(inLoop, 500);
    });
}
