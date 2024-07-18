class Player {
  constructor(skin, weapon, hp, playerPosition) {
    this.skin = skin;
    this.weapon = weapon;
    this.hp = hp;
    this.playerPosition = playerPosition;
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
