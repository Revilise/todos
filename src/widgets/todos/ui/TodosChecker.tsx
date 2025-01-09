import { useCN } from "@/shared/lib";
import { Checkbox } from "@/shared/ui/checkbox";
import { Button } from "@/shared/ui/button";
import { checkerDefaultProps as dp, ICheckerProps } from "@/widgets/todos/config";
import Link from "next/link";
import { motion } from "framer-motion";

/**
 * Todos checker item
 * @param baseClass
 * @param extraClasses
 * @param utilClasses
 * @param id
 * @param label
 * @param isChecked
 * @param onChange
 * @param onRemoveClick
 * @constructor
 */
export const TodosChecker = ({
  baseClass = dp.baseClass,
  extraClasses = dp.extraClasses,
  utilClasses = dp.utilClasses,
  id = dp.id,
  label = dp.label,
  isChecked = dp.isChecked,
  onChange = dp.onChange,
  onRemoveClick = dp.onRemoveClick,
}: Partial<ICheckerProps>) => {
  const { getCN } = useCN(baseClass);

  return (
     <motion.div className={getCN("", extraClasses, utilClasses)}>
       <Checkbox id={id} label={label} isChecked={isChecked} onChange={onChange} />
       <Link href={`/todos?id=${id}`}>Open</Link>
       <Button icon={"close"} onClick={onRemoveClick} />
     </motion.div>
  )
}
