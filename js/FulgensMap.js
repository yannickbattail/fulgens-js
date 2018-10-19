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

    function drawFactory(factory){
        ctx.fillStyle = 'green';
        ctx.fillRect(factory.position.x, factory.position.y, 1, 1);
    }

    function drawMine(mine){
        ctx.fillStyle = 'red';
        ctx.fillRect(mine.position.x, mine.position.y, 1, 1);
    }

    function drawDrone(drone){
        ctx.fillStyle = 'blue';
        ctx.fillRect(drone.currentPosition.x, drone.currentPosition.y, 1, 1);
    }

    this.drawMap = function(map, playerContext) {
        clear();
        map.factories.forEach(factory => {
            drawFactory(factory);
        });
        
        map.mines.forEach(mine => {
            drawMine(mine);
        });

        playerContext.drones.forEach(drone => {
            drawDrone(drone);
        });
    }
};