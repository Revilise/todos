import {todos} from "@/db";

export async function POST(request: Request) {
  const body = await request.json();
  return todos.query(body).then(res => {
    return Response.json(res)
  });
}
