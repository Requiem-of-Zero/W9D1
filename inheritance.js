
Function.prototype.inherits = function(parent) { //create surrogate snippet
  function Surrogate() {};
  Surrogate.prototype = parent.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this; 
}

Function.prototype.inherits = function(parent) { //create create snippet
    this.prototype = Object.create(parent.prototype);
    this.prototype.constructor = this; 
}

function MovingObject () {}

MovingObject.prototype.accelerate = function(num) {
  num = num || 10;
  this.speed += num;
}

function Ship (color, speed) {
  this.color = color;
  this.speed = speed;
}
Ship.inherits(MovingObject);

function Asteroid (color, speed) {
  this.color = color;
  this.speed = speed;
}
Asteroid.inherits(MovingObject);

Ship.prototype.fire = function() {
    console.log("Pew pew pew!!!");
}

Asteroid.prototype.explode = function() {
    console.log("Blaow!!!")
}

const movingObject = new MovingObject();

const ship = new Ship('Black', 100);

const asteroid = new Asteroid("Black", 5)

