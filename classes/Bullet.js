class Bullet {
  constructor(position) {
    this.x = position.x;
    this.y = position.y - 1;
  }

  move() {
    this.y--;
  }

  isOutOfField() {
    return this.y < 0;
  }
}

module.exports = Bullet;
