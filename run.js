//! Файл запуска игры
const Field = require("./classes/Field");
const Enemy = require("./classes/Enemy");
const Player = require("./classes/Player");
const keypress = require("keypress");

const playGame = () => {
  const newField = new Field(10);
  const newPlayer = new Player("^", "bluster", 1, { x: 5, y: 9 });
  const field = newField.createField(10);

  keypress(process.stdin);

  process.stdin.on("keypress", function (ch, key) {
    newPlayer.movePlayer(key.name, newField.fieldSize);
    newField.displayField(field, newPlayer.playerPosition, newPlayer.emoji);

    if (key && key.ctrl && key.name == "c") {
      console.log("ПОТРАЧЕНО!");
      process.stdin.pause();
    }
  });
  2;
  process.stdin.setRawMode(true);
  process.stdin.resume();

  newField.displayField(field, newPlayer.playerPosition, newPlayer.emoji);
};

playGame();
