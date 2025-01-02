import {defaultPropTypes} from "@/shared/lib/types";
import PropTypes from "prop-types";

export const propTypes = {
  ...defaultPropTypes,
  id: PropTypes.string,
  label: PropTypes.string,
  isChecked: PropTypes.bool,
  onChange: PropTypes.func
}
