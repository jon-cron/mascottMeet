import { AuthController } from './Controllers/AuthController.js';
import { LikersController } from "./Controllers/LIkersController.js";
import { PostsController } from "./Controllers/PostsController.js";
import { ValuesController } from './Controllers/ValuesController.js';

class App {
  authController = new AuthController();
  // valuesController = new ValuesController();

  postsController = new PostsController()
  
  likersController = new LikersController()
}

// @ts-ignore
window.app = new App()
