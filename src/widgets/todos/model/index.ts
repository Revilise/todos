import { ICheckbox} from "@/shared/ui/checkbox/config";
import {ChangeEvent, createRef, KeyboardEvent, useState} from "react";

export class TodosModel {

  static generateId(): string {
    if (window?.crypto?.randomUUID) {
      return window.crypto.randomUUID()
    }

    return Math.random().toString(36);
  }

  static countCompleted(todos: ICheckbox[]) {
    return todos.filter((todo: ICheckbox) => todo.isChecked).length;
  }

  static useModel(items: ICheckbox[] = [], animated: boolean = false) {
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
