import { AppState } from "../AppState.js";
import { playersService } from "../services/PlayerService.js";

export class PlayersController {
  constructor() {
    console.log('new score');
    this.drawPlayers()
  }
  drawPlayers() {
    let playersElm = document.getElementById('players')
    playersElm.innerHTML = ''
    for (let i = 0; i < AppState.players.length; i++) {
      const player = AppState.players[i];
      playersElm.innerHTML += `<p>${player.name}:${player.score} <button onclick="app.PlayersController.increaseScore('${player.name}')" class="btn btn-success">+</button> <button onclick="app.PlayersController.decreaseScore('${player.name}')" class="btn btn-danger">-</button></p>`
    }
  }
  increaseScore(playerName) {
    playersService.increaseScore(playerName)
    this.drawPlayers()
  }
  decreaseScore(playerName) {
    playersService.decreaseScore(playerName)
    this.drawPlayers()
  }
  addPlayer(playerName) {
    event.preventDefault()
    console.log('new player', playerName.value)
  }
}