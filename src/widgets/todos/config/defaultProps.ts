import { ICheckerProps, IProps } from "./interfaces";

export const defaultProps: IProps = {
  baseClass: "todos",
  extraClasses: {},
  utilClasses: [],
  items: [],
}

export const checkerDefaultProps: ICheckerProps = {
  baseClass: "todos__item",
  extraClasses: {},
  utilClasses: [],
  id: "",
  isChecked: false,
  label: "",
  onChange: () => {},
  onRemoveClick: () => {},
}
