import config from "../../config";
import AppError from "../../errors/AppError";
import { IUser } from "./user.inteface";
import httpStatus from "http-status";
import { createToken } from "./user.utils";

const loginUser = async (payload: IUser) => {
  const { email, password } = payload;

  const adminEmail = config.Admin_Email;
  const adminPass = config.Admin_Pass;

  if (email !== adminEmail) {
    throw new AppError(httpStatus.UNAUTHORIZED, "Email does not match");
  }

  if (password !== adminPass) {
    throw new AppError(httpStatus.FORBIDDEN, "Password does not match");
  }

  const jwtPayload = {
    userId: "adminId",
    name: "Admin",
    email: adminEmail,
    role: "admin",
  };

  const accessToken = createToken(
    jwtPayload,
    config.Access_Token as string,
    config.JWT_ACCESS_EXPIRES_IN as string
  );

  return {
    accessToken,
    message: "Login successful",
  };
};

export const UserService = {
  loginUser,
};
