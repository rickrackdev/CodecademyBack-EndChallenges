class Player {
  constructor(name, hitsPerMinute) {
    this._name = name;
    this._hitsPerMinute = hitsPerMinute;
    this._balloonCount = 100;
  }

  get name() {
    return this._name;
  }
  get hitsPerMinute() {
    return this._hitsPerMinute;
  }
  get balloonCount() {
    return this._balloonCount;
  }

  status() {
    console.log(
      `Player: ${this._name} -- Balloons Left: ${this._balloonCount}`
    );
  }
}

let p1 = new Player("p1", 5);
const p2 = new Player("p2", 2);

// Write function below
let balloonAttack = (player1, player2) => {
  let p1Health = player1.balloonCount - player2.hitsPerMinute * 10;
  let p2Health = player2.balloonCount - player1.hitsPerMinute * 10;

  if (p1Health > p2Health) {
    return player1.name;
  } else if (p1Health < p2Health) {
    return player2.name;
  } else {
    return "Tie";
  }
};

balloonAttack(p1, p2);
