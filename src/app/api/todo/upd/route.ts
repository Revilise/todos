import {todos} from "@/db";

export async function PUT(request: Response) {
  const body = await request.json();
  return todos.update(body).then(record => Response.json(record));
}
