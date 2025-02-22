export class game {
  game() {
    this.gameboard = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.points = 0;
    this.gameIsFinished = false;
  }
  playerMove(pos) {
    if (this.gameboard[pos] === 0) {
      this.gameboard[pos] = 1;
      if (this.points === 11) {
        return 2;
      }
      this.points++;
      return 1;
    } else {
      return 0;
    }
  }
}
