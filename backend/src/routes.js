import { Router } from "express";

import HomeController from './app/controllers/HomeController'
import LoginController from './app/controllers/LoginController';
import SettingController from './app/controllers/SettingController';
import LogsController from "./app/controllers/LogsController";
import AddressController from "./app/controllers/AddressController";

const routes = new Router();

routes.get('/home', HomeController.index)
routes.get('/setting', SettingController.index)
routes.get('/logs', LogsController.index)
routes.get('/address', AddressController.index)

routes.post('/login', LoginController.index)
routes.post('/setting', SettingController.store)

export default routes;