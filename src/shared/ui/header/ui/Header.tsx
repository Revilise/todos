import { useCN } from "@/shared/lib";
import { defaultProps as dp, propTypes, IProps } from "../config";

/**
 * Main header
 * @param baseClass
 * @param utilClasses
 * @param extraClasses
 * @param title
 * @constructor
 */
export const Header = ({
  baseClass = dp.baseClass,
  utilClasses = dp.utilClasses,
  extraClasses = dp.extraClasses,
}: Partial<IProps>) => {
  const { getCN } = useCN(baseClass);

  return (
     <header className={getCN("", extraClasses, utilClasses)}>
       <div className={getCN("wrapper")}>
         <div className={getCN("logoWrapper")}>
           <span className={"h1"}>TODO</span>
         </div>
       </div>
     </header>
  )
}

Header.propTypes = propTypes;
