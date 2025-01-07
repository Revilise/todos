"use client"

import { defaultProps as dp, propTypes, IProps } from "../config";
import { Checkbox } from "@/shared/ui/checkbox";
import { Stack } from "@/shared/ui/stack";
import { Input } from "@/shared/ui/input";
import { useCN } from "@/shared/lib";
import { TodosModel } from "@/widgets/todos/model";
import {Icon} from "@/shared/ui/icon";
import {AnimatePresence} from "framer-motion";
import {Collapse} from "@/shared/animate/collapse/ui/Collapse";

/**
 * Todos list
 * @param baseClass
 * @param extraClasses
 * @param utilClasses
 * @param items
 * @constructor
 */
export const Todos = ({
  baseClass = dp.baseClass,
  extraClasses = dp.extraClasses,
  utilClasses = dp.utilClasses,
  items = dp.items,
}: Partial<IProps>) => {
  const { getCN } = useCN(baseClass);
  const { todos, inputValue, onInputKeydown, onInputChange, onCheckboxChange, countCompleted } = TodosModel.useModel(items);

  return (
     <div className={getCN("", extraClasses, utilClasses)}>
       <Stack
          extraClasses={{
            TodoContainer: true,
          }}
          utilClasses={["fillFlex"]}
       >
         <Stack
            extraClasses={{
              isPadY12: true,
              isFlatBottom: true,
              isFloat: true,
              isShadow2: true,
            }}
         >
           <Input
              value={inputValue}
              onChange={onInputChange}
              onKeyDown={onInputKeydown}
              placeholder={"Create a new todo..."}
           />
         </Stack>
         <AnimatePresence>
           <Stack extraClasses={{ isGap16: true, isRelative: true }} utilClasses={["fillFlex"]}>
             {todos.length > 0
                ? (todos.map(({ id, isChecked, label }) =>
                   <Collapse key={id}>
                     <Checkbox id={id} key={id} isChecked={isChecked} label={label} onChange={onCheckboxChange} />
                   </Collapse>
                ))
                : (
                   <Stack extraClasses={{ centerContent: true }} utilClasses={["fillFlex"]}>
                     <Icon src={"cactus"} />
                     <p className={"h2 mb8"}>You’re todo’s are empty</p>
                     <p className={"text1"}>Please add first one</p>
                   </Stack>
                )
             }
           </Stack>
         </AnimatePresence>

         <Stack>
           <span className={"subtext alignRight"}>{countCompleted}/{todos.length} todos completed</span>
         </Stack>
       </Stack>
     </div>
  )
}

Todos.propTypes = propTypes;
