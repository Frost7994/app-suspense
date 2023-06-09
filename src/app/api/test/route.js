import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  // add delay
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 3000);
  });

  return NextResponse.json({
    data,
  });
}
