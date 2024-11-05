import { Player } from './models/Player.js';
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  // players = [new Player("Tony")];

  players = [
    new Player('Tony', 0),
    new Player('Tim', 0),
    new Player('Tod', 0)
  ]


  /**@type {import('./models/Example.js').Example[]} */
  examples = []
}

export const AppState = createObservableProxy(new ObservableAppState())

console.table(AppState.players)