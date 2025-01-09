import { ICheckbox} from "@/shared/ui/checkbox/config";
import {ChangeEvent, createRef, KeyboardEvent, useState} from "react";
import useSWR, {mutate} from "swr";
import {ITodo, ITodoCreate, ITodoDelete, ITodoUpdate} from "@/db/repo/todo/interfaces";

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
    const key = `${TodosModel.cfg.domain}/${id}`;

    const { data, error, isLoading } = useSWR<ITodo>(key, (url: string) => {
      return fetch(url, {
        method: "GET",
      }).then(res => res.json());
    })

    const mutateSingleTodo = () => mutate(key);

    return { todo: data, todoError: error, todoIsLoading: isLoading, mutateSingleTodo };
  }

  static useTodoModel() {
    const { todos } = TodosModel.useTodos();
    const [ inputValue, setInputValue ] = useState<string>("");

    const onInputKeydown  = (event: KeyboardEvent<HTMLInputElement>) => {

    }

    const onInputChange = (evt: ChangeEvent<HTMLInputElement>) => {

    }

    const onCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {

    }

    const removeTodo = (uid: string) => {

    }

    return {
      todos,
      inputValue,

      removeTodo,
      countCompleted: 0,

      onInputKeydown,
      onInputChange,
      onCheckboxChange,
    }
  }

  static useModel(items: ICheckbox[] = []) {
    const [ todos, setTodos ] = useState<ICheckbox[]>(items);
    const [ inputValue, setInputValue ] = useState<string>("");
    const [ countCompleted, updateCompletedCount ] = useState<number>(() => TodosModel.countCompleted(todos));

    const createTodo = (label: string): ICheckbox => {
      return { id: TodosModel.generateId(), label: label, isChecked: false, ref: createRef() };
    }

    const pushTodo = (todo: ICheckbox) => {
      setTodos(todos.concat([ todo ]))
    }

    const popTodo = (todo: ICheckbox) => {
      setTodos([ todo ].concat(todos));
    }

    const moveToEndTodo = (todo: ICheckbox) => {
      const list = todos.filter((item: ICheckbox) => item.id !== todo.id);
      setTodos(list.concat([todo]));
    }

    const removeTodo = (id: string) => {
      setTodos(todos.filter((item: ICheckbox) => item.id !== id))
    }

    const onInputKeydown  = (event: KeyboardEvent<HTMLInputElement>) => {
      if (event?.key == "Enter" && inputValue.trim().length > 0) {
        const todo = createTodo(inputValue);
        popTodo(todo)
        setInputValue("");
      }
    }

    const onInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
      setInputValue(evt.target?.value)
    }

    const onCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
      const checkbox = event.nativeEvent.target as HTMLInputElement;
      const target = todos.find(todo => todo.id === checkbox?.id);

      if (target) {
        target.isChecked = checkbox.checked;

        if (target.isChecked) {
          moveToEndTodo(target);
        }

        updateCompletedCount(TodosModel.countCompleted(todos));
      }
    }

    return {
      todos,
      inputValue,
      onInputChange,
      onInputKeydown,
      onCheckboxChange,
      countCompleted,
      removeTodo
    }
  }
}
