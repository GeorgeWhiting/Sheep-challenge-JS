describe('pen without a hungry wolf outside', function() {

  beforeEach(function() {
        spyOn(Math, 'random').and.returnValue(0.2);
  });

  describe('sheep can go in a pen', function() {
    it('should accept a sheep', function() {
      pen = new Pen;
      sheep1 = new Sheep('Charles');
      pen.acceptSheep(sheep1);
      expect(pen._sheepList).toEqual([sheep1]);
      expect(pen._sheepList.length).toEqual(1);
    });
    it('should unrogueify a sheep when sheep is penned', function() {
      pen = new Pen;
      sheep1 = new Sheep('Nora');
      pen.acceptSheep(sheep1);
      expect(sheep1._rogueStatus).toEqual(false);
    });
    it('should not be able to accept a tame sheep (tamed sheep live in pens)', function() {
      var pen = new Pen();
      var sheep1 = new Sheep('Nora');
      pen.acceptSheep(sheep1);
      expect(function() {
        pen.acceptSheep(sheep1);
      }).toThrowError("Cannot pen a penned sheep");
    });
  });

  describe('sheep names', function() {
    it('shepherd can get names of all of the sheep trapped in the pen :(', function() {
      pen = new Pen;
      sheep1 = new Sheep('Daffyd');
      sheep2 = new Sheep('Thomas');
      sheep3 = new Sheep('Nora');
      sheep4 = new Sheep('David');
      pen = new Pen;
      pen._sheepList = [sheep1, sheep2, sheep3, sheep4];
      expect(pen.sheepNames()).toEqual("Daffyd, Thomas, Nora, David");
    });
  });

  describe('sheep can leave a pen', function() {
    it('should release a sheep', function() {
      pen = new Pen;
      sheep1 = new Sheep('Nora');
      pen.acceptSheep(sheep1);
      pen.releaseSheep(sheep1);
      expect(pen._sheepList).toEqual([]);
      expect(pen._sheepList.length).toEqual(0);
    });
    it('should rogueify a sheep', function() {
      pen = new Pen;
      sheep1 = new Sheep('Charles');
      pen.acceptSheep(sheep1);
      pen.releaseSheep(sheep1);
      expect(sheep1._rogueStatus).toEqual(true);
    });
    it('should not be able to release a rogue sheep', function() {
      var pen = new Pen();
      var sheep1 = new Sheep('Nora');
      expect( function() {pen.releaseSheep(sheep1);}).toThrowError("Cannot release a rogue sheep");
    });
  });
  describe('a pen can only be so big, as we all know', function() {
    it('should throw an error if the pen is full', function() {
      var pen = new Pen(1);
      var sheepX = new Sheep('SheepX');
      pen.acceptSheep(sheepX);
      var sheepY = new Sheep('SheepY');
      expect( function() {pen.acceptSheep(sheepY);}).toThrowError('Your pen is full, get a bigger one!')
    });
  });
});
describe ('pen with a hungry wolf outside', function(){
  describe('wolves prevent sheep from leaving their pens', function() {
    it('should not let a sheep leave if there is a wolf', function() {
      pen = new Pen;
      sheep1 = new Sheep('Nora');
      pen.acceptSheep(sheep1);
      spyOn(Math, 'random').and.returnValue(0.9);
      jasper = new Wolf;
      expect(function() { pen.releaseSheep(sheep1); }).toThrowError('Dont let your sheep get eaten!');
    });
  });
});
