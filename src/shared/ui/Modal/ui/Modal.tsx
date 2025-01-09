"use client"
import { defaultProps as dp, propTypes, IProps } from "../config";
import { motion } from "framer-motion";
import { useCN } from "@/shared/lib";
import Link from "next/link";

export const Modal = ({
  baseClass = dp.baseClass,
  extraClasses = dp.extraClasses,
  utilClasses = dp.utilClasses,
  headerSlot = dp.headerSlot,
  containerSlotAttrs = dp.containerSlotAttrs,
  children = dp.children,
  closeLink = dp.closeLink
}: Partial<IProps>) => {
  const { getCN } = useCN(baseClass);

  return (
     <motion.div
        className={getCN("", extraClasses, utilClasses)}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{duration: 0.2, delay: 0.1}}
     >
       {closeLink && <Link className={getCN("backLink")} href={"/todos"} />}
       <motion.div className={getCN("container")} {...containerSlotAttrs}>
         <div className={getCN("header")}>
           {headerSlot}
         </div>
         <div className={getCN("content")}>
           {children}
         </div>
       </motion.div>
     </motion.div>
  )
};

Modal.propTypes = propTypes;
