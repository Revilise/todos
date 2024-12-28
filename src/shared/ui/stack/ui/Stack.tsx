import { useCN } from "@/shared/lib";
import { defaultProps as dp, propTypes, IProps } from "../config";

/**
 * Stack layout
 * @param baseClass
 * @param extraClasses
 * @param utilClasses
 * @param children
 * @constructor
 */
export const Stack = ({
  baseClass = dp.baseClass,
  extraClasses = dp.extraClasses,
  utilClasses = dp.utilClasses,
  children = dp.children
}: Partial<IProps>) => {
  const { getCN } = useCN(baseClass);

  return (
     <div className={getCN("", extraClasses, utilClasses)}>
       {children}
     </div>
  )
}

Stack.propTypes = propTypes;
