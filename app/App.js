import { router } from './router-config.js';
import { HomeController } from './controllers/HomeController.js';
import { AppState } from './AppState.js';
import { PlayersController } from './controllers/PlayersController.js';
const USE_ROUTER = false

class App {

  HomeController = new HomeController()
  PlayersController = new PlayersController()

  AppState = AppState
}

const app = new App()
// @ts-ignore
window.app = app
