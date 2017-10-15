define(["pixi", "constants"], () => {
  let exports = {};

  exports.renderer = new PIXI.WebGLRenderer({
    width: GAME_WIDTH,
    height: GAME_HEIGHT
  });

  exports.stage = new PIXI.Container();
  exports.ticker = new PIXI.ticker.Ticker();

  exports.spriteMap = {};

  exports.spriteMap[FRUIT_PLUS_ONE]         = "add1.png";
  exports.spriteMap[FRUIT_PLUS_TWO]         = "add2.png";
  exports.spriteMap[FRUIT_PLUS_THREE]       = "add3.png";
  exports.spriteMap[FRUIT_MINUS_ONE]        = "subtract1.png";
  exports.spriteMap[FRUIT_MINUS_TWO]        = "subtract2.png";
  exports.spriteMap[FRUIT_MINUS_THREE]      = "subtract3.png";
  exports.spriteMap[FRUIT_DIVIDE_BY_TWO]    = "divide2.png";
  exports.spriteMap[FRUIT_DIVIDE_BY_THREE]  = "divide3.png";
  exports.spriteMap[FRUIT_DOUBLE]           = "double.png";
  exports.spriteMap[FRUIT_TRIPLE]           = "triple.png";
  exports.spriteMap[FRUIT_SQRT]             = "sqrt.png";
  exports.spriteMap[WALL_VERTICAL]          = "vertical.png";
  exports.spriteMap[WALL_HORIZONTAL]        = "horizontal.png";
  exports.spriteMap[WALL_TOP_LEFT]          = "top-left.png";
  exports.spriteMap[WALL_TOP_RIGHT]         = "top-right.png";
  exports.spriteMap[WALL_BOTTOM_LEFT]       = "bottom-left.png";
  exports.spriteMap[WALL_BOTTOM_RIGHT]      = "bottom-right.png";

  document.body.appendChild(exports.renderer.view);

  PIXI.loader
    .add("../img/tileset.json");

  exports.createSprite = (id, x = null, y = null, alpha = null) => {
    let sprite = new PIXI.Sprite(
      PIXI.loader.resources["../img/tileset.json"].textures[id]
    );

    if (x !== null) sprite.x = x;
    if (y !== null) sprite.y = y;
    if (alpha !== null) sprite.alpha = alpha;

    return sprite;
  };

  return exports;
});
