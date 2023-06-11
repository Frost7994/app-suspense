import { NextResponse } from "next/server";

export async function GET(req) {
  // get user id
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("userId");

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );

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
