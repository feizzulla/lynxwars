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

  moveRight(fieldSize) {
    if (this.position.x < fieldSize * 2 - 1) {
      this.position.x++;
    }
  }

  moveTop() {
    if (this.position.x < 9) {
      this.position.y--;
    }
  }

  moveBottom() {
    if (this.position.x < 9) {
      this.position.y++;
    }
  }

  die() {
    console.log("Game Over!");
    process.exit();
  }
}

module.exports = Player;
