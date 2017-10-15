define(() => {
  TOP_PANEL_HEIGHT      = 33;

  GRID_COLS             = 72;
  GRID_ROWS             = 48;
  GRID_SNAKE            = 1;
  GRID_WALL             = -1;
  GRID_FRUIT            = 2;
  GRID_CENTER_X         = Math.floor(GRID_COLS / 2);
  GRID_CENTER_Y         = Math.floor(GRID_ROWS / 2);

  LEVEL_COLS            = 24;
  LEVEL_ROWS            = 24;

  GAME_WIDTH            = screen.width;
  GAME_HEIGHT           = screen.height - TOP_PANEL_HEIGHT;
  GAME_CENTER_X         = Math.floor(GAME_WIDTH / 2);
  GAME_CENTER_Y         = Math.floor(GAME_HEIGHT / 2);
  GAME_MODE_CLASSIC     = 0;
  GAME_MODE_CAMPAIGN    = 1;
  GAME_MAX_HEALTH       = 3;

  SNAKE_INITIAL_SIZE    = 10;
  SNAKE_INITIAL_X       = GRID_CENTER_X * 32;
  SNAKE_INITIAL_Y       = GRID_CENTER_Y * 32;
  SNAKE_INITIAL_VX      = 3;
  SNAKE_INITIAL_VY      = 0;
  SNAKE_DIRECTION_LEFT  = {x: -3, y: 0};
  SNAKE_DIRECTION_UP    = {x: 0, y: -3};
  SNAKE_DIRECTION_RIGHT = {x: 3, y: 0};
  SNAKE_DIRECTION_DOWN  = {x: 0, y: 3};
  SNAKE_DEFAULT_STATE   = 0;
  SNAKE_ENLARGE_STATE   = 1;
  SNAKE_SHRINK_STATE    = -1;

  WALL_VERTICAL         = "vw";
  WALL_HORIZONTAL       = "hw";
  WALL_TOP_LEFT         = "tl";
  WALL_TOP_RIGHT        = "tr";
  WALL_BOTTOM_LEFT      = "bl";
  WALL_BOTTOM_RIGHT     = "br";

  FRUIT_DEFAULT_STATE   = 0;
  FRUIT_BIRTH_STATE     = 1;
  FRUIT_FADE_STATE      = -1;
  FRUIT_PLUS_ONE        = "p1";
  FRUIT_PLUS_TWO        = "p2";
  FRUIT_PLUS_THREE      = "p3";
  FRUIT_MINUS_ONE       = "m1";
  FRUIT_MINUS_TWO       = "m2";
  FRUIT_MINUS_THREE     = "m3";
  FRUIT_DIVIDE_BY_TWO   = "d2";
  FRUIT_DIVIDE_BY_THREE = "d3";
  FRUIT_DOUBLE          = "db"; 
  FRUIT_TRIPLE          = "tp"; 
  FRUIT_SQRT            = "sq";

  KEY_ARROW_LEFT        = 37;
  KEY_ARROW_UP          = 38;
  KEY_ARROW_RIGHT       = 39;
  KEY_ARROW_DOWN        = 40;
  KEY_CTRL              = 17;
});
