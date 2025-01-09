import {todos} from "@/db";

export class TodosSSR {
  static cfg = {
    domain: '/api/todo'
  }

  static async useTodos(id: string) {
    const todo = await todos.getOne(id);

    return { todo }
  }
}
