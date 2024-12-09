import { Request, Response } from "express";
import { Citi, Crud } from "../global";

class TaskController implements Crud {
  constructor(private readonly citi = new Citi("Task")) {}
  create = async (request: Request, response: Response) => {
    const { title } = request.body;

    const isAnyUndefined = this.citi.areValuesUndefined(
      title
    );
    if (isAnyUndefined) return response.status(400).send();

    const newTask = { title };
    const { httpStatus, message } = await this.citi.insertIntoDatabase(newTask);

    return response.status(httpStatus).send({ message });
  };

  get = async (request: Request, response: Response) => {
    const { httpStatus, values } = await this.citi.getAll();

    return response.status(httpStatus).send(values);
  };

  delete = async (request: Request, response: Response) => {
    const { id } = request.params;

    const { httpStatus, messageFromDelete } = await this.citi.deleteValue(id);

    return response.status(httpStatus).send({ messageFromDelete });
  };

  update = async (request: Request, response: Response) => {
    const { id } = request.params;
    const { title } = request.body;

    const updatedValues = { title };

    const { httpStatus, messageFromUpdate } = await this.citi.updateValue(
      id,
      updatedValues
    );

    return response.status(httpStatus).send({ messageFromUpdate });
  };
}

export default new TaskController();
