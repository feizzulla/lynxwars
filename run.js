//! Файл запуска игры
const Field = require("./src/view/Field");
const Enemy = require("./src/game-models/Enemy");
const Player = require("./src/game-models/Player");
const Bullet = require("./src/game-models/Bullet");
const {
  shootBullet,
  updateBullets,
  playerAttack,
} = require("./modules/playerAttackFunc");
const keypress = require("keypress");

const bullets = [];

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

  process.stdin.setRawMode(true);
  process.stdin.resume();

  setInterval(() => {
    updateBullets();
    newField.displayField(field, playerPosition, bullets);
  }, 500);

  newField.displayField(
    field,
    newPlayer.playerPosition,
    newPlayer.emoji,
    bullets
  );
};

playGame();
