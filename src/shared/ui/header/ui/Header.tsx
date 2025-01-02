"use client"

import { setGlobalCssVar, useCN } from "@/shared/lib";
import { defaultProps as dp, propTypes, IProps } from "../config";
import { useEffect, useRef } from "react";

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
  const headerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (headerRef) {
      setGlobalCssVar("--headerHeight", `${headerRef.current?.offsetHeight}px`)
    }
  }, [headerRef])

  return (
     <header ref={headerRef} className={getCN("", extraClasses, utilClasses)}>
       <div className={getCN("wrapper")}>
         <div className={getCN("logoWrapper")}>
           <span className={"h2"}>TODO</span>
         </div>
       </div>
     </header>
  )
}

Header.propTypes = propTypes;
