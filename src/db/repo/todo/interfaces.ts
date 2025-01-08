
export interface ITodo {
  uid: string,
  label: string,
  isDone: boolean,
}

export interface ITodoWhere extends Partial<ITodo> {
  skip: number,
  limit: number,
  orderBy: string,
}

export interface ITodoCreate {
  label: string,
  isDone: boolean
}


export interface ITodoUpdate {
  uid: string,
  updRecord: ITodo,
}

export interface ITodoDelete extends ITodo {
  uid: string,
}
