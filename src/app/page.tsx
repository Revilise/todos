import { PageLayout } from "@/shared/ui/pageLayout";
import ExampleCover from "@/public/assets/uploads/covers/cover-1.png";
import { Header } from "@/shared/ui/header";
import { Todos } from "@/widgets/todos";

export default function HomePage() {
  return (
     <PageLayout
        headerSlot={<Header />}
        cover={ExampleCover.src}
     >
       <Todos utilClasses={["contents"]}/>
     </PageLayout>
  );
}
