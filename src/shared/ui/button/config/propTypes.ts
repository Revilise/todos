import { defaultPropTypes } from "@/shared/lib/types";
import PropTypes from "prop-types";

export const propTypes = {
  ...defaultPropTypes,
  label: PropTypes.string,
  icon: PropTypes.string,
  iconPosition: PropTypes.string,
  onClick: PropTypes.func,
}
