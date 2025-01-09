import { IDefaultProps } from "@/shared/lib/interfaces";
import React from "react";

export interface IProps extends IDefaultProps {
  headerSlot: React.ReactNode | React.ReactNode[] | null,
  children: React.ReactNode | React.ReactNode[] | null,
  containerSlotAttrs: object,
  closeLink: string,
}
