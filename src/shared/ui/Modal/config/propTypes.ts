import {customPropTypes, defaultPropTypes} from "@/shared/lib/types";
import PropTypes from "prop-types";

export const propTypes = {
  ...defaultPropTypes,
  headerSlot: customPropTypes.children,
  children: customPropTypes.children,
  closeBtn: PropTypes.object
}
