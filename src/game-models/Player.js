class Player {
  constructor() {
    this.skin = "o";
    this.weapon = "o";
    this.hp = 1;
    this.position = { x: 0, y: 9 };
  }

  moveLeft() {
    this.position.x -= 1;
  }

  moveRight() {
    this.position.x += 1;
  }

  moveTop() {
    this.position.y += 1;
  }

  moveBottom() {
    this.position.y -= 1;
  }

  attack() {
    this.bullet.fly();
  }

  die() {
    this.skin = "💀";
    console.log("YOU ARE DEAD!💀");
    process.exit();
  }
}

module.exports = Player;
