import React from "react";
import { IDefaultProps } from "@/shared/lib/interfaces";

export interface IProps extends IDefaultProps {
  children: React.ReactNode | React.ReactNode[] | null,
  headerSlot: React.ReactNode | React.ReactNode[] | null,
  cover: string
}
