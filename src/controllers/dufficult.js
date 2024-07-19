class Difficult {
  constructor(difficult = 500) {
    this.difficult = difficult;
    this.fieldSizeCoefficient = this.fieldSizeCoefficient * difficult;
    this.enemySpeed = this.enemySpeed * difficult;
    this.enemyCreateSpeed = this.enemyCreateSpeed * difficult;
  }
}

module.exports = Difficult;
