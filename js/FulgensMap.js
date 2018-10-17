"use strict";

function FulgensMap(canvasId) {

    var id = canvasId;
    var canvas = document.getElementById(id);
    var ctx = canvas.getContext('2d');

    function clear() {
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, 100, 100);
        ctx.fillRect(0, 0, canvas.width, canvas.height);
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

    this.drawMap = function(map, playerContext) {
        clear();
        drawMainBuilding(map.items[0].position);
        drawMine(map.items[1].position);
        drawDrone(playerContext.drones[0].currentPosition);
        drawDrone(playerContext.drones[1].currentPosition);
    }
};