const keypress = require("keypress");
const Bullet = require("../game-models/Bullet");
const Enemy = require("../game-models/Enemy");
const Field = require("../view/Field");
const Player = require("../game-models/Player");
const Difficult = require("./dufficult");

class Game {
  constructor() {
    this.fieldSize = 10;
    this.player = new Player(this.fieldSize);
    this.enemies = [];
    this.bullets = [];
    this.view = new Field(this.fieldSize);
    this.field = this.view.createField();
    this.setupInput();
    this.diffucult = new Difficult(50);
  }

  setupInput() {
    keypress(process.stdin);

    process.stdin.on("keypress", (ch, key) => {
      if (key) {
        if (key.name === "a") {
          this.player.moveLeft();
        } else if (key.name === "d") {
          this.player.moveRight();
        } else if (key.name === "space") {
          this.shoot();
        }
        if (key.ctrl && key.name === "c") {
          process.exit();
        }
      }
    });

    process.stdin.setRawMode(true);
    process.stdin.resume();
  }

  shoot() {
    this.bullets.push(
      new Bullet({ x: this.player.position.x, y: this.player.position.y - 1 })
    );
  }

  moveEnemies() {
    this.enemies.forEach((enemy) => enemy.moveDown());
    this.enemies = this.enemies.filter(
      (enemy) => enemy.position.y < this.fieldSize
    );
  }

  moveBullets() {
    this.bullets.forEach((bullet) => bullet.move());
    this.bullets = this.bullets.filter((bullet) => bullet.position.y >= 0);
  }

  checkCollisions() {
    this.enemies.forEach((enemy, enemyIndex) => {
      if (
        enemy.position.x === this.player.position.x &&
        enemy.position.y === this.player.position.y
      ) {
        this.player.die();
      }
      this.bullets.forEach((bullet, bulletIndex) => {
        if (
          bullet.position.x === enemy.position.x &&
          (bullet.position.y === enemy.position.y ||
            bullet.position.y === enemy.position.y - 1)
        ) {
          this.enemies.splice(enemyIndex, 1);
          this.bullets.splice(bulletIndex, 1);
        }
      });
    });
  }

  updateField() {
    this.view.displayField(
      this.field,
      this.player.position,
      this.enemies,
      this.bullets
    );
  }

  play() {
    setInterval(() => {
      this.updateField();
    });

    setInterval(() => {
      this.moveBullets();
      this.checkCollisions();
    }, 200);

    setInterval(() => {
      this.moveEnemies();
      this.checkCollisions();
    }, this.diffucult.enemySpeed);

    setInterval(() => {
      this.enemies.push(new Enemy(this.fieldSize));
    }, this.diffucult.enemyCreateSpeed);
  }
}

module.exports = Game;
