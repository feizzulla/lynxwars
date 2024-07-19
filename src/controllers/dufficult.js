class Difficult {
  constructor(difficult = 100) {
    this.difficult = difficult;
    this.fieldSizeCoefficient = this.fieldSizeCoefficient * difficult;
    this.enemySpeed = 5 * difficult;
    this.enemyCreateSpeed = 20 * difficult;
  }
}

module.exports = Difficult;
