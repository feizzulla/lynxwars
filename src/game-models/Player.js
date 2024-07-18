class Player {
  constructor(fieldSize) {
    this.position = { x: Math.floor(fieldSize / 2), y: fieldSize - 1 };
    this.symbol = "🚀";
  }

  moveLeft() {
    if (this.position.x > 0) {
      this.position.x--;
    }
  }

  moveRight() {
    if (this.position.x < 9) {
      this.position.x++;
    }
  }

  die() {
    console.log("Game Over!");
    process.exit();
  }
}

module.exports = Player;
