import { IDefaultProps } from "@/shared/lib/interfaces";
import { ChangeEventHandler, Ref } from "react";

export interface ICheckbox {
  id: string,
  label: string,
  isChecked: boolean,
  ref?: Ref<HTMLLabelElement>
}

export interface IProps extends IDefaultProps, ICheckbox {
  onChange: ChangeEventHandler<HTMLInputElement> ,
}
