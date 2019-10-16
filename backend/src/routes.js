import { Router } from "express";

import HomeController from './app/controllers/HomeController'
import LoginController from './app/controllers/LoginController';
const routes = new Router();

routes.get('/home', HomeController.index)
routes.post('/login', LoginController.index)

export default routes;