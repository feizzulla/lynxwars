const Bullet = require("../classes/Bullet");

const shootBullet = (playerPosition) => {
  bullets.push(new Bullet(playerPosition));
};

const updateBullets = (bullets) => {
  bullets = bullets.filter((bullet) => !bullet.isOutOfField());
  bullets.forEach((bullet) => bullet.move());
};

const playerAttack = (key, playerPosition) => {
  switch (key) {
    case "space":
      shootBullet(playerPosition);
  }
};
module.exports = { shootBullet, updateBullets, playerAttack };
