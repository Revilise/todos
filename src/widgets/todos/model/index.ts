import { ICheckbox } from "@/shared/ui/checkbox/config";
import { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
import useSWR, {mutate} from "swr";
import { ITodo, ITodoCreate, ITodoDelete, ITodoUpdate } from "@/db/repo/todo/interfaces";
import { useSearchParams } from "next/navigation";

export class TodosModel {

  static cfg = {
    domain: '/api/todo'
  }

  static generateId(): string {
    if (window?.crypto?.randomUUID) {
      return window.crypto.randomUUID()
    }

    return Math.random().toString(36);
  }

  static countCompleted(todos: ICheckbox[]) {
    return todos.filter((todo: ICheckbox) => todo.isChecked).length;
  }

  static useTodos() {
    const { data, error, isLoading } = useSWR<ITodo[]>(TodosModel.cfg.domain, (url: string) => {
      return fetch(url, {
        method: "POST",
        body: JSON.stringify({
          limit: 100
        }),
      }).then(res => res.json());
    });
    const mutateSwrTodos = () => mutate(TodosModel.cfg.domain);

    return { todos: data, todosError: error, todosLoading: isLoading, mutateSwrTodos }
  }

  static createTodo(todo: ITodoCreate) {
    return fetch(`${TodosModel.cfg.domain}/create`, {
      method: "POST",
      body: JSON.stringify(todo)
    })
  }

  static deleteTodo(todo: ITodoDelete) {
    return fetch(`${TodosModel.cfg.domain}/delete`, {
      method: "DELETE",
      body: JSON.stringify(todo)
    })
  }

  static updateTodo(todo: ITodoUpdate) {
    return fetch(`${TodosModel.cfg.domain}/upd`, {
      method: "PUT",
      body: JSON.stringify(todo)
    })
  }

  static useSingleTodo(id: string) {
    return fetch(`${TodosModel.cfg.domain}/${id}`).then(res => res.json() as Promise<ITodo>);
  }

  static async useServerTodo(id: string) {
    const todo = await fetch(`${TodosModel.cfg.domain}/${id}`, {
      method: "GET"
    }).then(res => res.json() as Promise<ITodo>);

    return { todo }
  }

  static useTodoModel() {
    const search = useSearchParams();
    const id = search.get("id");
    console.log("id =>", id)

    const { todos, mutateSwrTodos } = TodosModel.useTodos();
    const [ selectedTodo, setSelectedTodo ] = useState<ITodo>();
    const [ inputValue, setInputValue ] = useState<string>("");

    const onInputKeydown  = (event: KeyboardEvent<HTMLInputElement>) => {
      if (event?.key == "Enter" && inputValue.trim().length > 0) {
        TodosModel.createTodo({ label: inputValue, isDone: false }).then(() => mutateSwrTodos());
        setInputValue("");
      }
    }

    const onInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
      setInputValue(evt.target?.value)
    }

    const onCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {

    }

    const removeTodo = (uid: string) => {
      TodosModel.deleteTodo({ uid }).then(res => mutateSwrTodos());
    }

    useEffect(() => {
      if (id) {
        TodosModel.useSingleTodo(id).then(todo => setSelectedTodo(todo))
      }
      else if (!id && selectedTodo !== null) {
        setSelectedTodo(undefined);
      }
    }, [id])

    return {
      todos,
      inputValue,

      selectedTodo,

      removeTodo,
      countCompleted: 0,

      onInputKeydown,
      onInputChange,
      onCheckboxChange,
    }
  }
}
