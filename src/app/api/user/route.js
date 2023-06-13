import { NextResponse } from "next/server";

export async function GET(req) {
  const res = await fetch("https://jsonplaceholder.typicode.com/users?id=1");
  const data = await res.json();

  // return data after 3 seconds
  await new Promise((resolve) => setTimeout(resolve, 8000));

  return NextResponse.json({
    status: 200,
    message: "Hello World",
    data,
  });
}
