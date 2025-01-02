import { defaultProps as dp, propTypes, IProps } from "../config";
import { useCN } from "@/shared/lib";

const spritePath = "/assets/icons/index.svg";

/**
 * Icon
 * @param baseClass
 * @param extraClasses
 * @param utilClasses
 * @param extraAttrs
 * @param src
 * @constructor
 */
export const Icon = ({
  baseClass = dp.baseClass,
  extraClasses = dp.extraClasses,
  utilClasses = dp.utilClasses,
  extraAttrs = dp.extraClasses,
  src = dp.src,
}: Partial<IProps>) => {
  const { getCN } = useCN(baseClass);

  return (
     <svg className={getCN("", extraClasses, [`icon-${src}`, ...utilClasses])} {...extraAttrs}>
       <use href={`${spritePath}#icon-${src}`} />
     </svg>
  )
}

Icon.propTypes = propTypes;
