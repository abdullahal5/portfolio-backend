import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { ISkill } from "./skills.interface";
import { SkillModel } from "./skills.model";

const CreateSkillIntoDB = async (payload: ISkill) => {
  const { name, tag, image, progress } = payload;

  if (!name || !tag || !image || progress === undefined) {
    throw new AppError(httpStatus.BAD_REQUEST, "Please fill all the fields");
  }

  const newSkill = await SkillModel.create({
    name,
    tag,
    image,
    progress,
  });

  return newSkill;
};

const GetAllSkills = async () => {
  const skills = await SkillModel.find();
  return skills;
};

const GetSkillById = async (id: string) => {
  const skill = await SkillModel.findById(id);
  
  if (!skill) {
    throw new AppError(httpStatus.NOT_FOUND, "Skill not found");
  }

  return skill;
};

const UpdateSkillById = async (id: string, payload: ISkill) => {
  const updatedSkill = await SkillModel.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });

  if (!updatedSkill) {
    throw new AppError(httpStatus.NOT_FOUND, "Skill not found");
  }

  return updatedSkill;
};

const DeleteSkillById = async (id: string) => {
  const deletedSkill = await SkillModel.findByIdAndDelete(id);

  if (!deletedSkill) {
    throw new AppError(httpStatus.NOT_FOUND, "Skill not found");
  }

  return deletedSkill;
};

export const SkillService = {
  CreateSkillIntoDB,
  GetAllSkills,
  GetSkillById,
  UpdateSkillById,
  DeleteSkillById,
};
