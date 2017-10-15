define(["utils", "data"], function(Utils, Data) {
  let spriteMap = Utils.spriteMap;
  let stage = Utils.stage;
  let fruitGrid = Data.fruitGrid,
      logicGrid = Data.logicGrid;
  
  function Fruit(x, y, type, duration) {
    this.x = x;
    this.y = y;
    this.type = type;
    this.state = FRUIT_BIRTH_STATE;
    this.duration = duration;
    this.alpha    = 0;
    this.sprite = Utils.createSprite(
      spriteMap[this.type],
      this.x * 32,
      this.y * 32
    );
  }

  Fruit.prototype.draw = function() {
    fruitGrid.set(this.x, this.y, this);
    logicGrid.set(this.x, this.y, GRID_FRUIT);
    stage.addChild(this.sprite);
  }

  Fruit.prototype.update = function() {
    if (this.state === FRUIT_BIRTH_STATE) {
      this.alpha += (1 / 200);
    }
    else {
      this.alpha -= (1 / 200);
    }

    if (this.alpha <= 0) {
      this.remove();
    }

    this.sprite.alpha = this.alpha;
  }

  Fruit.prototype.remove = function() {
    stage.removeChild(this.sprite);
    fruitGrid.set(this.x, this.y, null);
    logicGrid.set(this.x, this.y, null);
  }

  return Fruit;
});