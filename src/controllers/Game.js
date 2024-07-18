const keypress = require("keypress");
const Bullet = require("../game-models/Bullet");
const Enemy = require("../game-models/Enemy");
const Field = require("../view/Field");
const Player = require("../game-models/Player");

class Game {
  constructor() {
    this.fieldSize = 10;
    this.player = new Player();
    this.enemies = [];
    this.bullets = [];
    this.view = new Field(this.fieldSize);
    this.field = this.view.createField();
    this.setupInput();
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

  checkHero() {
    if (this.player.position === this.enemy.position) {
      this.player.die();
    }
  }

  checkEnemy() {
    if (this.enemy.position === this.bullet.position) {
      this.enemy.die();
    }
  }

  moveEnemies() {
    this.enemies.forEach((enemy) => enemy.moveDown());
    this.enemies = this.enemies.filter((enemy) => enemy.position >= 0);
  }

  moveBullets() {
    this.bullets.forEach((bullet) => bullet.moveUp());
    this.bullets = this.bullets.filter(
      (bullet) => bullet.position < this.fieldSize
    );
  }

  checkCollisions() {
    this.enemies.forEach((enemy, enemyIndex) => {
      if (enemy.position === this.player.position) {
        this.player.die();
      }
      this.bullets.forEach((bullet, bulletIndex) => {
        if (bullet.position === enemy.position) {
          this.enemies.splice(enemyIndex, 1);
          this.bullets.splice(bulletIndex, 1);
        }
      });
    });
  }

  updateField() {
    this.field = this.view.createField();
    this.view.displayField(
      this.field,
      this.player.position,
      this.enemies,
      this.bullets
    );
  }

  play() {
    console.log(this.view);
    setInterval(() => {
      this.moveEnemies();
      this.moveBullets();
      this.checkCollisions();
      this.updateField();
    }, 240);

    setInterval(() => {
      this.enemies.push(new Enemy(this.fieldSize));
    }, 1000);
  }
}

module.exports = Game;
