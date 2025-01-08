import {todos} from "@/db";

export async function DELETE(request: Request){
  const body = await request.json();
  return todos.delete(body).then(record => Response.json(record));
}
