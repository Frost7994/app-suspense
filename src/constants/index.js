export const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://app-quizmedic-coral.vercel.app"
    : "http://localhost:3000";
