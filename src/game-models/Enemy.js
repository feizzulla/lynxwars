class Enemy {
  constructor(hp) {
    this.generateSkin();
    this.hp = hp;
    this.generateStartPosition();
  }

  generateSkin() {
    const skins = [
      "👾",
      "💀",
      "👹",
      "👻",
      "👽",
      "👿",
      "💩",
      "🤡",
      "🤺",
      "🧛",
      "🧟",
      "🎃",
    ];
    this.skin = skins[Math.floor(Math.random() * skins.length)];
  }

  generateStartPosition() {
    this.position = { x: null, y: 0 };
    this.position.x = Math.ceil(Math.random() * 10);
  }

  moveDown() {
    this.position.y -= 1;
  }

  die() {
    this.position = "?";
    console.log("Enemy is dead!");
  }
}

module.exports = Enemy;
