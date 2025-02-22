export class game {
  inProgress = false;
  isWon = false;
  isLost = false;
  gameboard = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  points = 0;
  constructor() {
    this.points = 0;
    this.gameIsFinished = false;
  }
  setProgress() {
    this.inProgress = true;
  }
  playerMove(pos) {
    console.log(pos);
    if (this.inProgress && this.gameboard[pos] === 0) {
      this.gameboard[pos] = 1;
      if (this.points === 11) {
        this.gameIsFinished = true;
        this.inProgress = false;
        this.isWon = true;
      }
      console.log(this.points);
      this.points += 1;
    } else {
      this.inProgress = false;
      this.isLost = true;
      console.log(this.gameboard);
    }
  }

  checkProgress() {
    // console.log("x");
    return this.inProgress;
  }
  getPoints() {
    // console.log(this.points);
    return this.points;
  }
}
