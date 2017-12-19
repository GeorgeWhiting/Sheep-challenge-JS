function Wolf() {
};

Wolf.prototype.isWolfHungry = function() {
  random =  Math.random()
  if (random >= 0.75) {
    return true;
  } else {
    return false;
  };
};
