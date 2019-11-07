import { Router } from "express";

import UserController from "./app/controllers/UserController";
import SensorController from "./app/controllers/SensorController";

const routes = new Router();

routes.post("/users", UserController.store);
routes.get("/users", UserController.index);

routes.post("/sensors", SensorController.store);

export default routes;
