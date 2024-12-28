import React from "react";
import { IDefaultProps } from "@/shared/lib/interfaces";

export interface IProps extends IDefaultProps {
  children: React.ReactNode,
  headerSlot: React.ReactNode,
  cover: string
}
