class Enemy {
  constructor() {
    this.generateSkin();
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
    this.position = { x: 0, y: 0 };
    this.position.x = Math.ceil(Math.random() * 10);
  }

  moveDown() {
    this.position.y++;
  }

  die() {
    this.position = "?";
    console.log("Enemy is dead!");
  }
}

module.exports = Enemy;
