"use strict";

function FulgensMap(canvasId) {

    var id = canvasId;
    var canvas = document.getElementById(id);
    var ctx = canvas.getContext('2d');
    var squareSize = 3;

    var images = [];
    images['map'] = new Image();
    images['map'].src = 'img/ground.jpg';
    images['drone'] = new Image();
    images['drone'].src = 'img/drone24x24.png';
    images['factory'] = new Image();
    images['factory'].src = 'img/factory32x32.png';
    images['gold-mine'] = new Image();
    images['gold-mine'].src = 'img/gold-mine32x32.png';

    /**
     * translate game coord to displayed map coord
     * @param {object} coord 
     */
    function trlCoord(coord){
        return {
            "x":coord.x * squareSize + squareSize / 2,
            "y":coord.y * squareSize + squareSize / 2,
        };
    }

    function drawImg(imgName, coord) {
        var i = images[imgName];
        ctx.drawImage(i, coord.x - i.width / 2, coord.y - i.height / 2);
    }

    function clear(map) {
        var mapDim = map.dimensions.item2;
        canvas.width = mapDim.x * squareSize;
        canvas.height = mapDim.y * squareSize;
        ctx.drawImage(images['map'], 0, 0);
    }

    function drawFactory(factory){
        var pos = trlCoord(factory.position);
        //ctx.fillStyle = 'green';
        //ctx.fillRect(pos.x, pos.y, squareSize, squareSize);
        drawImg('factory', pos);
    }

    function drawMine(mine){
        var pos = trlCoord(mine.position);
        //ctx.fillStyle = 'red';
        //ctx.fillRect(pos.x, pos.y, squareSize, squareSize);
        drawImg('gold-mine', pos);
    }

    function drawDrone(drone){
        var pos = trlCoord(drone.currentPosition);
        //ctx.fillStyle = 'blue';
        //ctx.fillRect(pos.x, pos.y, squareSize, squareSize);
        drawImg('drone', pos);
    }

    this.drawMap = function(map, playerContext) {
        clear(map);
        map.factories.forEach(factory => {
            drawFactory(factory);
        });

        map.mines.forEach(mine => {
            drawMine(mine);
        });

        playerContext.drones.forEach(drone => {
            drawDrone(drone);
        });
    };
}
