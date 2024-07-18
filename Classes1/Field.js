class Field {
  constructor(pablicField) {
    this.pablicField = pablicField;
  }

  // Создание игрового поля
  createField (size) {
    const field = [];
    for (let i = 0; i < size; i++) {
      field.push(new Array(size).fill('.'));
    }
    return field;
  };

  // Отображение игрового поля
  displayField (field, playerPosition) {
    console.clear();
    const fieldWithPlayer = field.map((row, y) => 
      row.map((cell, x) => (playerPosition.x === x && playerPosition.y === y) ? 'P' : cell)
    );
    fieldWithPlayer.forEach(row => console.log(row.join(' ')));
  };
}
