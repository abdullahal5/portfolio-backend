import catchAsync from "../../utils/catchAsync";
import SendResponse from "../../utils/sendResponse";
import { UserService } from "./user.service";
import httpStatus from "http-status";

const loginUser = catchAsync(async (req, res) => {
  const result = await UserService.loginUser(req.body);
  const { accessToken } = result;

  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User logged in succesfully!",
    data: {
      accessToken,
    },
  });
});

export const UserController = {
  loginUser,
};
