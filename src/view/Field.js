class Field {
  constructor(fieldSize) {
    this.fieldSize = fieldSize;
  }

  // Создание игрового поля
  createField(fieldSize) {
    const field = [];
    for (let i = 0; i < fieldSize; i++) {
      field.push(new Array(fieldSize).fill("."));
    }
    return field;
  }

  displayField(field, playerPosition, enemies, bullets) {
    console.clear();
    const fieldWithPlayer = field.map((row, y) =>
      row.map((cell, x) => {
        if (playerPosition.x === x && playerPosition.y === y) return "🚀";
        for (const enemy of enemies) {
          if (enemy.position.x === x && enemy.position.y === y) return "👾";
        }
        for (const bullet of bullets) {
          if (bullet.position.x === x && bullet.position.y === y) return "🔥";
        }
      })
    );
    fieldWithPlayer.forEach((row) => console.log(row.join(" ")));
  }
}

module.exports = Field;
