import {defaultPropTypes} from "@/shared/lib/types";
import PropTypes from "prop-types";

export const propTypes = {
  ...defaultPropTypes,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
}
