function Sheep(name) {
  this.name = name;
  this._rogueStatus = true;
};

Sheep.prototype.makeRogue = function(sheep) {
    this._rogueStatus = true;
};

Sheep.prototype.makeTame = function(sheep) {
    this._rogueStatus = false;
};
