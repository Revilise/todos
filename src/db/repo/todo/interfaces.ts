import {IBaseCreate, IBaseUpdate} from "@/db/lib/adapter";

export interface ITodo {
  uid: string,
  label: string,
  isDone: boolean,
  createdAt: Date,
  updatedAt: Date,
}

export interface ITodoWhere extends Partial<ITodo> {
  skip: number,
  limit: number,
  orderBy: string,
}

export interface ITodoCreate extends IBaseCreate {
  label: string,
  isDone: boolean
}


export interface ITodoUpdate extends IBaseUpdate {
  uid: string,
  updRecord: ITodo,
}

export interface ITodoDelete {
  uid: string,
}
