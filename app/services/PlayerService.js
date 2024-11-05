import { AppState } from "../AppState.js";

class PlayersService {
  increaseScore(playerName) {
    const selectedPlayer = AppState.players.find(player => player.name == playerName)
    selectedPlayer.score++
    console.log('selected', selectedPlayer);
  }
  decreaseScore(playerName) {
    const selectedPlayer = AppState.players.find(player => player.name == playerName)
    selectedPlayer.score--
    console.log('selected', selectedPlayer);
  }
  addPlayer(playerName) {
    AppState.players.push
  }
}


export const playersService = new PlayersService()