import { Header } from "@/shared/ui/header";
import { Todos } from "@/widgets/todos";
import { PageLayout } from "@/shared/ui/pageLayout";
import ExampleCover from "@/public/assets/uploads/covers/cover-1.png";
import { PropsWithChildren } from "react";

export default function TodosLayout({ children }: PropsWithChildren) {
  return (
     <>
     <PageLayout
        headerSlot={<Header />}
        cover={ExampleCover.src}
     >
       <Todos utilClasses={["contents"]}/>
       {children}
     </PageLayout>
     </>
  )
}
