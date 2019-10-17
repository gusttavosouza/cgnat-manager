import { Router } from "express";

import HomeController from './app/controllers/HomeController'
import LoginController from './app/controllers/LoginController';
import SettingController from './app/controllers/SettingController';

const routes = new Router();

routes.get('/home', HomeController.index)
routes.get('/setting', SettingController.index)

routes.post('/login', LoginController.index)

export default routes;