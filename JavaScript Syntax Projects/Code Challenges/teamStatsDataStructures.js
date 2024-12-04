/*
Team Stats
We want to create, retrieve, and add information about your favorite sports team. Basketball, soccer, tennis, or water polo, you pick it. 
It’s your job to create data using the JavaScript data structures at your disposal: arrays and objects.

After we create these data structures in this project, feel free to challenge yourself to gain insights from them. 
For example, you might want to get the total number of games your team has played, or the average score of all of their games.
*/

const team = {
  _players: [
    (player = { name: "Ricardo", lastName: "Alvarenga", age: 25 }),
    (player = { name: "Nelson", lastName: "Alvarenga", age: 22 }),
    (player = { name: "Kevin", lastName: "Cuadra", age: 25 }),
  ],
  _games: [
    (game1 = { opponent: "Real Madrid", teamGoals: 4, opponentGoals: 0 }),
    (game2 = { opponent: "Manchester City", teamGoals: 2, opponentGoals: 1 }),
    (game3 = { opponent: "Liverpool", teamGoals: 1, opponentGoals: 3 }),
  ],
  get players() {
    if (this._players != 0) {
      return this._players;
    } else {
      return "There are no registered players on your team!";
    }
  },
  get games() {
    if (this._games != 0) {
      return this._games;
    } else {
      return "There are no registered games for your team";
    }
  },
  addPlayer(newFirstName, newLastName, newAge) {
    player = { name: newFirstName, lastName: newLastName, age: newAge };
    this._players.push(player);
  },
  addGame(newOpponent, newTeamGoals, newOpponentGoals) {
    game = {
      opponent: newOpponent,
      teamGoals: newTeamGoals,
      opponentGoals: newOpponentGoals,
    };
    this._games.push(game);
  },
};

team.addPlayer("Lionel", "Messi", 37);
team.addGame("El Salvador", 5, 9);
console.log(team.players);
console.log(team.games);
