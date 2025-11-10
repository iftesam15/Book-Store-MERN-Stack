import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT || 5555;

export const mongoDBURL = process.env.MONGODB_URL || "";

// JWT Configuration
export const ACCESS_TOKEN_SECRET =
  process.env.ACCESS_TOKEN_SECRET ||
  "your-access-token-secret-change-this-in-production";
export const REFRESH_TOKEN_SECRET =
  process.env.REFRESH_TOKEN_SECRET ||
  "your-refresh-token-secret-change-this-in-production";
export const ACCESS_TOKEN_EXPIRY = process.env.ACCESS_TOKEN_EXPIRY || "10s"; // 10 seconds
export const REFRESH_TOKEN_EXPIRY = process.env.REFRESH_TOKEN_EXPIRY || "7d"; // 7 days

// Please create a free database for yourself.
// This database will be deleted after tutorial
