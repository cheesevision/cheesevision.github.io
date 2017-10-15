define(["utils", "grid"], (Utils, Grid) => {
  let exports = {};

  exports.logicGrid = new Grid(GRID_COLS, GRID_ROWS);
  exports.fruitGrid = new Grid(GRID_COLS, GRID_ROWS);

  return exports;
});
