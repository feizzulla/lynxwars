const Bullet = require("../game-models/Bullet");
const Enemy = require("../game-models/Enemy");
const Field = require("../view/Field");
const Player = require("../game-models/Player");

class Game {
  constructor() {
    this.fieldSize = 10;
    this.player = new Player();
    this.enemy = new Enemy();
    this.view = new Field(this.fieldSize);
    this.field = [];
    this.regenerateField();
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

  regenerateField() {}

  play() {
    setInterval(() => {
      //this.checkHero();
      //this.checkEnemy();
    }, 500);
  }
}

module.exports = Game;
