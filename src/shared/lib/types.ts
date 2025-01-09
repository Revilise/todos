import PropTypes from "prop-types";

export const defaultPropTypes = {
  baseClass: PropTypes.string,
  extraClasses: PropTypes.object,
  utilClasses: PropTypes.arrayOf(PropTypes.string),
  extraAttrs: PropTypes.object,
}

export const customPropTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node), PropTypes.string])
}
