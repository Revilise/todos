import { IProps } from "./interfaces";

export const defaultProps: IProps = {
  baseClass: "input",
  extraClasses: {},
  utilClasses: [],
  placeholder: "",
  value: "",
  onChange: () => undefined,
  onKeyDown: () => undefined,
}
