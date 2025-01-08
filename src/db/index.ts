import { initProvider } from "@/db/providers";
import { TodosRepository } from "@/db/repo/todo";
import { BasicAdapter } from "@/db/lib/adapter";

const adapter = initProvider();

/* export below your repositories */

export const todos =  new TodosRepository(adapter as BasicAdapter);
