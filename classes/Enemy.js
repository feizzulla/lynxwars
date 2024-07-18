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
    this.startPosition = { x: null, y: 0 };
    this.startPosition.x = Math.ceil(Math.random() * 30);
  }

  moveDown() {
    // Идём влево.
    this.position.y -= 1;
  }

  die() {
    this.position = "?";
    console.log("Enemy is dead!");
  }
}

module.exports = Enemy;
