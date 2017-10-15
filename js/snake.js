define(["utils", "data"], (Utils, Data) => {
  let stage = Utils.stage;
  let createSprite = Utils.createSprite;
  let logicGrid = Data.logicGrid;
  
  function Snake() {
    this._queue    = [];
    this._state    = SNAKE_DEFAULT_STATE;
    this._vx       = 0;
    this._vy       = 0;
  }

  Snake.prototype.front = function() {
    return this._queue[0];
  }

  Snake.prototype.size = function() {
    return this._queue.length;
  }

  Snake.prototype.push = function(value) {
    this._queue.unshift(value);
  }

  Snake.prototype.pop = function() {
    return this._queue.pop();
  }

  Snake.prototype.initialize = function() {
    this.setVelocity(SNAKE_INITIAL_VX, SNAKE_INITIAL_VY);
    this._queue.unshift(
      Utils.createSprite("snakeHeadRight.png", SNAKE_INITIAL_X, SNAKE_INITIAL_Y)
    );
    
    for (let i = 0; i < SNAKE_INITIAL_SIZE - 1; i++)
      this.enlarge();
  }

  Snake.prototype.draw = function() {
    stage.addChild(this.front());
  }

  Snake.prototype.enlarge = function() {
    let sprite;
    let last = (this._queue.length > 0 ? this.front() : {x: 0, y: 0});
    let vx = this._vx, vy = this._vy;
    let newX = last.x + vx, newY = last.y + vy;

    if (vx < 0 && vy === 0) {
      sprite = "snakeHeadLeft.png";
    }
    else if (vx === 0 && vy < 0) {
      sprite = "snakeHeadUp.png";
    }
    else if (vx > 0 && vy === 0) {
      sprite = "snakeHeadRight.png";
    }
    else if (vx === 0 && vy > 0) {
      sprite = "snakeHeadDown.png";
    }

    this.push(createSprite(sprite, newX, newY));
  }

  Snake.prototype.shift = function() {
    this.enlarge();
    stage.removeChild(this.pop());
  }

  Snake.prototype.shrink = function() {
    stage.removeChild(this.pop());
  }

  Snake.prototype.setVelocity = function(vx, vy) {
    this._vx = vx;
    this._vy = vy;
  }

  return Snake;
});
