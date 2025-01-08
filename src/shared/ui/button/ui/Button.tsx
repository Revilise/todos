import { defaultProps as dp, propTypes, IProps } from "../config";
import { Icon } from "@/shared/ui/icon";
import { useCN } from "@/shared/lib";

/**
 * Button
 * @param baseClass
 * @param extraClasses
 * @param utilClasses
 * @param onClick
 * @param label
 * @param icon
 * @param iconPosition
 * @constructor
 */
export const Button = ({
  baseClass = dp.baseClass,
  extraClasses = dp.extraClasses,
  utilClasses = dp.utilClasses,
  onClick = dp.onClick,
  label = dp.label,
  icon = dp.icon,
  iconPosition = dp.iconPosition,
}: Partial<IProps>) => {
  const { getCN } = useCN(baseClass);

  return (
     <button className={getCN("", extraClasses, utilClasses)} onClick={onClick}>
       {iconPosition === "left" && <Icon src={icon} />}
       {label && <span className={getCN("label")}>{label}</span>}
       {iconPosition === "right" && <Icon src={icon} />}
     </button>
  )
}

Button.propTypes = propTypes;
