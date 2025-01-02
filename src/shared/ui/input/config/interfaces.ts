import { IDefaultProps } from "@/shared/lib/interfaces";
import { ChangeEventHandler, KeyboardEventHandler } from "react";

export interface IProps extends IDefaultProps {
  placeholder: string,
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>,
  onKeyDown: KeyboardEventHandler<HTMLInputElement>,
}
