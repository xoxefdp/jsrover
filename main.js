// Directions
const NORTH = 0;
const EAST = 1;
const SOUTH = 2;
const WEST = 3;

// Square dimensions
var SDX = 5; // Square dimension X
var SDY = 5; // Square dimension Y

// Initial Rover Attributes
var IRPX = 0; // Initial Rover Position X
var IRPY = 0; // Initial Rover Position Y
var IRD = NORTH; // Initial Rover Direction

// GLOBAL
var RPX = IRPX;
var RPY = IRPY;
var RD = IRD;

const dir = function(dir) {

    let direction;

    if (dir == NORTH) {
        direction = 'NORTH';
    } else if (dir == EAST) {
        direction = 'EAST';
    } else if (dir == SOUTH) {
        direction = 'SOUTH';
    } else { // WEST
        direction = 'WEST';
    }

    return direction;
}


// Movement functions
const R = function () {
    RD = (4 + RD - 1) % 4
    console.log( 'Rover Direction: '+dir(RD) );
    document.getElementById('direction').innerText = 'Rover Direction: '+dir(RD);
    return RD;
}

const L = function () {
    RD = (RD + 1) % 4
    console.log( 'Rover Direction: '+dir(RD) );
    document.getElementById('direction').innerHTML = 'Rover Direction: '+dir(RD);
    return RD;
}

const A = function () {
    if (RD == NORTH) {
        RPY++;
    } else if (RD == EAST) {
        RPX++;
    } else if (RD == SOUTH) {
        RPY--;
    } else { // WEST
        RPX--;
    }

    console.log('RoverX: ' + RPX, 'RoverY: ' + RPY);
    document.getElementById('coordinates').innerHTML = 'Rover Position XY: ['+RPX+','+RPY+']';
}

window.addEventListener('keyup', function(event) {
    if (event.keyCode == 65) {
        A();
    } else if(event.keyCode == 82) {
        R();
    } else if(event.keyCode == 76) {
        L();
    } else {
        // 
    }
});

window.onload = function() {
    document.getElementById('direction').innerHTML = 'Rover Direction: ' + dir(RD);
    document.getElementById('coordinates').innerHTML = 'Rover Position XY: [' + RPX + ',' + RPY + ']';
};
