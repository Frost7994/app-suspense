export const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://app-suspense.vercel.app"
    : "http://localhost:3000";
