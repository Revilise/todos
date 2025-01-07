import { defaultProps as dp, propTypes, IProps } from "../config";
import { useCN } from "@/shared/lib";
import {forwardRef, Ref} from "react";

/**
 * Checkbox
 * @param baseClass
 * @param extraClasses
 * @param utilClasses
 * @param id
 * @param isChecked
 * @param label
 * @param onChange
 * @constructor
 */
export const Checkbox = forwardRef(
   ({
      baseClass = dp.baseClass,
      extraClasses = dp.extraClasses,
      utilClasses = dp.utilClasses,
      id = dp.id,
      isChecked = dp.isChecked,
      label = dp.label,
      onChange = dp.onChange
    }: Partial<IProps>, ref: Ref<HTMLLabelElement>) => {
     const { getCN } = useCN(baseClass);

     return (
        <label ref={ref} className={getCN("", extraClasses, utilClasses)}>
          <input id={id}
                 className={getCN("value")}
                 type={"checkbox"}
                 defaultChecked={isChecked}
                 onChange={onChange}
          />
          <div className={getCN("pseudo")}></div>
          <span className={getCN("label")}>{label}</span>
        </label>
     )
   }
)

Checkbox.propTypes = propTypes;
