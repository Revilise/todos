import { IProps } from "./interfaces";

export const defaultProps: IProps = {
  id: "0",
  baseClass: "checker",
  extraClasses: {},
  utilClasses: [],
  label: "",
  isChecked: false,
  onChange: () => undefined,
}
