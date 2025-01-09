import { IDefaultProps } from "@/shared/lib/interfaces";
import  * as CheckboxCfg from "@/shared/ui/checkbox/config";
import { MouseEventHandler } from "react";

export interface IProps extends IDefaultProps {
  items: [],
}

export interface ICheckerProps extends IDefaultProps, CheckboxCfg.IProps {
  onRemoveClick: MouseEventHandler
}
