import { todos } from "@/db";

export async function GET(request: Response, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return todos.getOne(id).then(record => Response.json(record));
}
