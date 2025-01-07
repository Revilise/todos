import { useCN } from "@/shared/lib";
import { defaultProps as dp, propTypes, IProps } from "../config";
import { forwardRef, Ref } from "react";

/**
 * Stack layout
 * @param baseClass
 * @param extraClasses
 * @param utilClasses
 * @param children
 * @constructor
 */
export const Stack = forwardRef(
   ({
      baseClass = dp.baseClass,
      extraClasses = dp.extraClasses,
      utilClasses = dp.utilClasses,
      children = dp.children
    }: Partial<IProps>, ref: Ref<HTMLElement>) => {
     const { getCN } = useCN(baseClass);

     return (
        <div ref={ref} className={getCN("", extraClasses, utilClasses)}>
          {children}
        </div>
     )
   }
)

Stack.propTypes = propTypes;
