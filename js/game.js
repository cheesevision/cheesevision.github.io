define(["utils", "snake", "fruit", "grid", "data"], (Utils, Snake, Fruit, Grid, Data) => {
  let renderer, stage, ticker;
  let snake;
  let score, levelNumber, health;
  let fruitGrid = Data.fruitGrid,
      logicGrid = Data.logicGrid;

  let keyPressed = {};
  let exports = {};

  exports.setup = function() {
    renderer = Utils.renderer;
    stage    = Utils.stage;
    ticker   = Utils.ticker;
    snake    = new Snake();

    score       = 0;
    levelNumber = 1;
    health      = 3;

    snake.initialize();

    document.addEventListener("keydown", (e) => {
      keyPressed[e.keyCode] = true;
    });

    document.addEventListener("keyup", (e) => {
      keyPressed[e.keyCode] = false;
    });

    generateFood(50);
  }

  exports.exit = function() {
    stage.removeChildren();
    renderer.clear();
    ticker.remove(loop);
  }

  exports.addAnimation = function() {
    ticker.add(loop);
  }

  exports.start = function() {
    ticker.start();
  }

  exports.stop = function() {
    ticker.stop();
  }

  exports.updateData = function() {
    exports.levelNumber = levelNumber;
    exports.score       = score;
    exports.health      = health;
  }

  let loop = function() {
    update();
  }

  function generateFood(nFruits) {
    let emptyCoords = [];
    let fruitTypes = [
      FRUIT_PLUS_ONE,
      // FRUIT_PLUS_TWO,
      // FRUIT_PLUS_THREE,
      FRUIT_MINUS_ONE,
      // FRUIT_MINUS_TWO, 
      // FRUIT_MINUS_THREE,
      FRUIT_DOUBLE, 
      FRUIT_TRIPLE,
      FRUIT_DIVIDE_BY_TWO
    ]
    for (let i = 0; i < GRID_COLS; i++) {
      for (let j = 0; j < GRID_ROWS; j++) {
        if (!logicGrid.get(i, j)) {
          emptyCoords.push({x:i, y:j});
        }
      }
    }

    for (let i = 0; i < nFruits; i++) {
      let randomIndex = parseInt(Math.random() * emptyCoords.length);
      let randomX     = emptyCoords[randomIndex].x;
      let randomY     = emptyCoords[randomIndex].y;
      let randomType  = fruitTypes[parseInt(Math.random() * fruitTypes.length)];

      new Fruit(randomX, randomY, randomType).draw();
    }
  }

  function isCollided(x, y) {
    let x1 = Math.floor(x / 32),
        y1 = Math.floor(y / 32);

    let x2 = Math.floor((x + 32) / 32),
        y2 = Math.floor((y + 32) / 32);

    function getValues(x, y) {
      return {
        x: x,
        y: y,
        type: logicGrid.get(x, y)
      }
    }
    
    if (logicGrid.get(x1, y1)) {
      return getValues(x1, y1);
    }
    else if (logicGrid.get(x2, y1)) {
      return getValues(x2, y1);
    }
    else if (logicGrid.get(x1, y2)) {
      return getValues(x1, y2);
    }
    else if (logicGrid.get(x2, y2)) {
      return getValues(x2, y2);
    }

    return false;
  }

  function updateSnake() {
    if (keyPressed[KEY_ARROW_LEFT] && snake._vx !== 3) {
      snake.setVelocity(-3, 0);
    }
    else if (keyPressed[KEY_ARROW_UP] && snake._vy !== 3) {
      snake.setVelocity(0, -3);
    }
    else if (keyPressed[KEY_ARROW_RIGHT] && snake._vx !== -3) {
      snake.setVelocity(3, 0);
    }
    else if (keyPressed[KEY_ARROW_DOWN] && snake._vy !== -3) {
      snake.setVelocity(0, 3);
    }

    snake.enlarge();

    let collided = isCollided(snake.front().x, snake.front().y);

    if (collided) {
      if (collided.type === GRID_FRUIT) {
        let fruit = fruitGrid.get(collided.x, collided.y);

        switch (fruit.type) {
          case FRUIT_PLUS_ONE:
            score += 10;
          break;

          case FRUIT_PLUS_TWO:
            score += 20;
            snake.enlarge();
          break;

          case FRUIT_PLUS_THREE:
            score += 30;
            for (let i = 0; i < 2; i++)
              snake.enlarge();
          break;

          case FRUIT_MINUS_ONE:
            score -= 10;
            for (let i = 0; i < 2; i++)
              snake.shrink();
          break;

          case FRUIT_MINUS_TWO:
            score -= 20;
            for (let i = 0; i < 3; i++)
              snake.shrink();
          break;

          case FRUIT_MINUS_THREE:
            score -= 30;
            for (let i = 0; i < 4; i++)
              snake.shrink();
          break;

          case FRUIT_DOUBLE:
            snake.state = SNAKE_ENLARGE_STATE;
            score *= 2;
            snake.changedSize = snake.size() * 2;
          break;

          case FRUIT_TRIPLE:
            snake.state = SNAKE_ENLARGE_STATE;
            score *= 3;
            snake.changedSize = snake.size() * 3;
          break;

          case FRUIT_DIVIDE_BY_TWO:
            snake.state = SNAKE_SHRINK_STATE;
            score = parseInt(score / 2);
            snake.changedSize = parseInt(snake.size() / 2);
          break;
        }

        fruit.remove();
      }
    }
    else {
      snake.shrink();
    }

    switch (snake.state) {
      case SNAKE_ENLARGE_STATE:
        if (snake.size() >= snake.changedSize) {
          snake.lastSize = null;
          snake.changedSize = null;
          snake.state = SNAKE_DEFAULT_STATE;
        }
        else {
          snake.enlarge();
        }
      break;

      case SNAKE_SHRINK_STATE:
        if (snake.size() <= snake.changedSize) {
          snake.changedSize = null;
          snake.state = SNAKE_DEFAULT_STATE;
        }
        else {
          snake.shrink();
        }
      break;
    }

    snake.draw();
  }

  function update() {
    stage.pivot.x = snake.front().x;
    stage.pivot.y = snake.front().y;
    stage.position.x = GAME_CENTER_X;
    stage.position.y = GAME_CENTER_Y;

    updateSnake();

    renderer.render(stage)
  }

  function end() {

  }

  return exports; 
});