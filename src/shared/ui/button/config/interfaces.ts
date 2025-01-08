import { IDefaultProps } from "@/shared/lib/interfaces";
import { MouseEventHandler } from "react";

export interface IProps extends IDefaultProps {
  label: string;
  icon: string;
  iconPosition: "left" | "right";
  onClick: MouseEventHandler
}
