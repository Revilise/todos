import PropTypes from "prop-types";
import {customPropTypes, defaultPropTypes} from "@/shared/lib/types";

export const propTypes = {
  ...defaultPropTypes,
  children: customPropTypes.children,
  headerSlot: PropTypes.node,
  cover: PropTypes.object || PropTypes.string
}
