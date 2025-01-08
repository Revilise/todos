import {todos} from "@/db";

export async function POST(request: Request) {
  const body = await request.json();
  return todos.create(body).then((record) => Response.json(record));
}
