class Player {
  constructor(emoji, weapon, hp, playerPosition) {
    this.emoji = emoji;
    this.weapon = weapon;
    this.hp = hp;
    this.playerPosition = playerPosition;
  }

  // Обработка движения игрока
  movePlayer (key) {
    switch (key) {
      case 'w':
        if (playerPosition.y > 0) playerPosition.y--;
        break;
      case 'a':
        if (playerPosition.x > 0) playerPosition.x--;
        break;
      case 's':
        if (playerPosition.y < fieldSize - 1) playerPosition.y++;
        break;
      case 'd':
        if (playerPosition.x < fieldSize - 1) playerPosition.x++;
        break;
    }
  };
}
