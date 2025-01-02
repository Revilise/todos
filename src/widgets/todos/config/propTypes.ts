import {defaultPropTypes} from "@/shared/lib/types";
import PropTypes from "prop-types";

export const propTypes = {
  ...defaultPropTypes,
  items: PropTypes.arrayOf(PropTypes.object),
}
