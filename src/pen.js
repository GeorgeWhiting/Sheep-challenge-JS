DEFAULT_CAPACITY = 10
function Pen(capacity = DEFAULT_CAPACITY) {
  this._sheepList = [];
  this._capacity = capacity;
};

Pen.prototype.acceptSheep = function(sheep) {
  if (sheep._rogueStatus === false) {
    throw new Error("Cannot pen a penned sheep");
  } else {
    if (this._sheepList.length >= this._capacity) {
      throw new Error('Your pen is full, get a bigger one!');
    } else
    {
      this._sheepList.push(sheep);
      sheep.makeTame(sheep);
    };
  };
};

Pen.prototype.sheepNames = function() {
  nameString = ''
  for(i=0; i<this._sheepList.length; i++){
    nameString += this._sheepList[i].name + ', ';
  };
  return nameString.slice(0,-2);
};

Pen.prototype.releaseSheep = function(sheep) {
  if (Wolf.prototype.isWolfHungry() == false ){
    if (sheep._rogueStatus === true) {
      throw new Error("Cannot release a rogue sheep");
    } else {
      _index = this._sheepList.indexOf(sheep);
      this._sheepList.splice(_index, 1);
      sheep.makeRogue(sheep);
    };
  } else {
    throw new Error("Dont let your sheep get eaten!");
  }
};


Pen.prototype.isSheepInPen = function(sheep) {
  console.log('hi')
  if (this._sheepList.includes(sheep)) {
    return true;
  } else {
    return false;
  };
};
