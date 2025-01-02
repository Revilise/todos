import { useCN } from "@/shared/lib";
import { defaultProps as dp, propTypes, IProps } from "../config";
import Image from "next/image";

/**
 * Root layout for page.
 * @param baseClass
 * @param extraClasses
 * @param utilClasses
 * @param headerSlot
 * @param children
 * @param cover
 * @constructor
 */
export const PageLayout = ({
  baseClass = dp.baseClass,
  extraClasses = dp.extraClasses,
  utilClasses = dp.utilClasses,
  headerSlot = dp.headerSlot,
  children = dp.children,
  cover = dp.cover,
}: Partial<IProps>) => {
  const { getCN } = useCN(baseClass);

  return (
     <div className={getCN("", extraClasses, utilClasses)}>
       <div className={getCN("cover")}>
         <Image
            src={cover}
            alt={""}
            fill={true}
         />
       </div>

       {headerSlot && (
          <div className={getCN("header")}>
            {headerSlot}
          </div>
       )}

       <div className={getCN("content")}>
         {children}
       </div>
     </div>
  )
}

PageLayout.propTypes = propTypes;
