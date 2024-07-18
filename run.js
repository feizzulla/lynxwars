//! Файл запуска игры
const keypress = require("keypress");

const playGame = () => {
  const field = createField(fieldSize);

  keypress(process.stdin);

  process.stdin.on("keypress", function (ch, key) {
    movePlayer(key.name);
    displayField(field, playerPosition);

    if (key && key.ctrl && key.name == "c") {
      console.log("ПОТРАЧЕНО!");
      process.stdin.pause();
    }
  });
  2;
  process.stdin.setRawMode(true);
  process.stdin.resume();

  displayField(field, playerPosition);
};

playGame();
