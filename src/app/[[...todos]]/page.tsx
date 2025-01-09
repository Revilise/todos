import {Modal} from "@/shared/ui/Modal";
import {TodosSSR} from "@/widgets/todos/model/ssr";
import {AnimatePresence} from "framer-motion";

export default async function TodosPage({ params }: { params: Promise<{ id: string }> }) {
  // const urlParams = await params;
  // const [domain, id] = urlParams.todos;
  // if (!id) return null;
  //
  // const {todo} = await TodosSSR.useTodos(id);
  //
  // if (todo) {
  //   return (
  //      <AnimatePresence>
  //        <Modal
  //           key={"modal"}
  //           headerSlot={<span>{todo?.label}</span>}
  //           containerSlotAttrs={{ layoutId: `todos-item-${todo?.uid}` }}
  //           closeLink={"/todos"}
  //        >
  //          {todo?.isDone}
  //        </Modal>
  //      </AnimatePresence>
  //   )
  // }
  //
  // return null;

  return <></>
}
