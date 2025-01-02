import { useCN } from "@/shared/lib";
import { defaultProps as dp, propTypes, IProps } from "../config";

/**
 * Input
 * @param baseClass
 * @param extraClasses
 * @param utilClasses
 * @param value
 * @param placeholder
 * @param onChange
 * @param onKeyDown
 * @constructor
 */
export const Input = ({
  baseClass = dp.baseClass,
  extraClasses = dp.extraClasses,
  utilClasses = dp.utilClasses,
  value = dp.value,
  placeholder = dp.placeholder,
  onChange = dp.onChange,
  onKeyDown = dp.onKeyDown,
}: Partial<IProps>) => {
  const { getCN } = useCN(baseClass);

  return (
     <div className={getCN("", extraClasses, utilClasses)}>
       <input
          className={getCN("value")}
          onKeyDown={onKeyDown}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
       />
     </div>
  )
}

Input.propTypes = propTypes;
