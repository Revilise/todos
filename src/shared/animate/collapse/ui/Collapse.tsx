import { defaultProps as dp, propTypes, IProps } from "../config";
import { motion } from "framer-motion";

/**
 * Animate disappearing as collapsing
 * @param className
 * @param children
 * @constructor
 */
export const Collapse = ({
  className = dp.className,
  children = dp.children
}: IProps) => {
  return <motion.div layout className={className} exit={{ opacity: 0 }}>{children}</motion.div>
}

Collapse.propTypes = propTypes;
