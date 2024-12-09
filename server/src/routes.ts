import express from "express";
import userController from "./controllers/UserController";
import taskController from "./controllers/TaskController";

const routes = express.Router();

routes.post("/user", userController.create);
routes.get("/user", userController.get);
routes.delete("/user/:id", userController.delete);
routes.patch("/user/:id", userController.update);

routes.post("/task", taskController.create);
routes.get("/task", taskController.get);
routes.delete("/task/:id", taskController.delete);
routes.patch("/task/:id", taskController.update);

routes.get("/", (request, response) => {
    return response.send("Hello, world!");
});

export default routes;
