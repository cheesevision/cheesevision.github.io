define(["utils"], (Utils) => {
  function Grid(width, height) {
    this.width = width;
    this.height = height;
    this._grid = [];
    
    for (let i = 0; i < height; i++) {
      this._grid.push([]);
      for (let j = 0; j < width; j++) {
        this._grid[i] = [];
        this._grid[i][j] = null;
      }
    }
  }

  Grid.prototype.set = function(x, y, value) {
    this._grid[y][x] = value;
  }

  Grid.prototype.get = function(x, y) {
    return this._grid[y][x];
  }

  Grid.prototype.assign = function(grid) {
    this._grid = grid;
  }

  return Grid;
});
