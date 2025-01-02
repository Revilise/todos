import { ICheckbox} from "@/shared/ui/checkbox/config";
import { ChangeEvent, KeyboardEvent, useState } from "react";

export class TodosModel {

  static generateId(): string {
    if (window?.crypto?.randomUUID) {
      return window.crypto.randomUUID()
    }

    return Math.random().toString(36);
  }

  static useModel(items: ICheckbox[] = []) {
    const [ todos, setTodos ] = useState<ICheckbox[]>(items);
    const [ inputValue, setInputValue ] = useState<string>("");

    const createTodo = (label: string): ICheckbox => {
      return { id: TodosModel.generateId(), label: label, isChecked: false };
    }

    const pushTodo = (todo: ICheckbox) => {
      setTodos(todos.concat([ todo ]))
    }

    const popTodo = (todo: ICheckbox) => {
      setTodos([ todo ].concat(todos));
    }

    const removeTodo = (todo: ICheckbox) => {
      setTodos(todos.filter((item: ICheckbox) => item.id !== todo.id))
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
        // return removeTodo(target);
      }
    }

    return {
      todos,
      pushTodo,
      removeTodo,
      inputValue,
      onInputChange,
      onInputKeydown,
      onCheckboxChange
    }
  }

}
