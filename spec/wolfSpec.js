describe('wolf factor', function() {
  it('wolf should be hungry if rand returns > 0.75', function() {
    var wolf = new Wolf;
    spyOn(Math, 'random').and.returnValue(0.9);
    expect(wolf.isWolfHungry()).toEqual(true);
  });
  it('wolf should not be hungry if rand returns < 0.75', function() {
    var wolf = new Wolf;
    spyOn(Math, 'random').and.returnValue(0.2);
    expect(wolf.isWolfHungry()).toEqual(false);
  });
});
