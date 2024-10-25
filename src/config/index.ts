import dotenv from "dotenv";
dotenv.config();

export default {
  port: process.env.PORT,
  db_url: process.env.DB_URL,
  NODE_ENV: process.env.NODE_ENV,
  Admin_Email: process.env.Admin_Email,
  Admin_Pass: process.env.Admin_Pass,
  Access_Token: process.env.Access_token,
  JWT_ACCESS_EXPIRES_IN: process.env.JWT_ACCESS_EXPIRES_IN,
};
