class Player {
  constructor(emoji, weapon, hp, playerPosition) {
    this.emoji = emoji;
    this.weapon = weapon;
    this.hp = hp;
    this.playerPosition = playerPosition;
  }

  // Обработка движения игрока
  movePlayer(key, fieldSize) {
    switch (key) {
      case "w":
        if (this.playerPosition.y > 0) this.playerPosition.y--;
        break;
      case "a":
        if (this.playerPosition.x > 0) this.playerPosition.x--;
        break;
      case "s":
        if (this.playerPosition.y < fieldSize - 1) this.playerPosition.y++;
        break;
      case "d":
        if (this.playerPosition.x < fieldSize * 3 - 1) this.playerPosition.x++;
        break;
    }
  }
}

module.exports = Player;
