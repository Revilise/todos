import { IDefaultProps } from "@/shared/lib/interfaces";
import { ChangeEventHandler } from "react";

export interface ICheckbox {
  id: string,
  label: string,
  isChecked: boolean,
}

export interface IProps extends IDefaultProps, ICheckbox {
  onChange: ChangeEventHandler<HTMLInputElement> ,
}
