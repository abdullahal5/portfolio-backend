import catchAsync from "../../utils/catchAsync";
import SendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import { SkillService } from "./skills.service";

const postSkill = catchAsync(async (req, res) => {
  const result = await SkillService.CreateSkillIntoDB(req.body);

  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Skill created successfully!",
    data: result,
  });
});

const getAllSkills = catchAsync(async (req, res) => {
  const result = await SkillService.GetAllSkills();

  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Skills retrieved successfully!",
    data: result,
  });
});

const getSkillById = catchAsync(async (req, res) => {
  const result = await SkillService.GetSkillById(req.params.id);

  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Skill retrieved successfully!",
    data: result,
  });
});

const updateSkillById = catchAsync(async (req, res) => {
  const result = await SkillService.UpdateSkillById(req.params.id, req.body);

  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Skill updated successfully!",
    data: result,
  });
});

const deleteSkillById = catchAsync(async (req, res) => {
  await SkillService.DeleteSkillById(req.params.id);

  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Skill deleted successfully!",
    data: undefined,
  });
});

export const SkillController = {
  postSkill,
  getAllSkills,
  getSkillById,
  updateSkillById,
  deleteSkillById,
};
