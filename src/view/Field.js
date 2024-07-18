console.log("init Field");

class Field {
  constructor(fieldSize) {
    this.fieldSize = fieldSize;
  }

  // Создание игрового поля
  createField(fieldSize) {
    const field = [];
    for (let i = 0; i < fieldSize; i++) {
      field.push(new Array(fieldSize * 3).fill("."));
    }
    return field;
  }

  // Отображение игрового поля
  displayField(field, playerPosition, emoji, bullets) {
    console.clear();
    const fieldWithPlayer = field.map((row, y) =>
      row.map((cell, x) => {
        if (playerPosition.x === x && playerPosition.y === y) {
          return `${emoji}`;
        }
        for (let bullet of bullets) {
          if (bullet.x === x && bullet.y === y) {
            return "o";
          }
        }
        return cell;
      })
    );
    fieldWithPlayer.forEach((row) => console.log(row.join(" ")));
  }
}

module.exports = Field;
