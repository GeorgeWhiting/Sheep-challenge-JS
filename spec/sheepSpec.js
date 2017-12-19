describe('sheep', function() {
  describe('sheep can have name', function() {
    it('should have a name', function() {
      sheep1 = new Sheep('Charles');
      expect(sheep1.name).toEqual('Charles');
    });
  });

  describe('sheep can change rogue status', function() {
    it('should have status set to rogue', function() {
      sheep1 = new Sheep('Charles');
      sheep1._rogueStatus = false;
      sheep1.makeRogue(sheep1);
      expect(sheep1._rogueStatus).toEqual(true);
    });

    it('should have status set to not-rogue', function() {
      sheep1 = new Sheep('Charles');
      sheep1._rogueStatus = true;
      sheep1.makeTame(sheep1);
      expect(sheep1._rogueStatus).toEqual(false);
    });
  });
});
