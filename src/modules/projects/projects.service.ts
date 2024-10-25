import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { IProject } from "./projects.interface";
import { ProjectModel } from "./projects.model";

const createProject = async (payload: IProject) => {
  const {
    title,
    coverImage,
    image,
    sub,
    technologies,
    features,
    tag,
    githubLink,
    liveLink,
  } = payload;

  if (!payload) {
    throw new AppError(httpStatus.BAD_REQUEST, "Please fill all the fields");
  }

  const newProject = await ProjectModel.create({
    title,
    coverImage,
    image,
    sub,
    technologies,
    features,
    tag,
    githubLink,
    liveLink,
  });

  return newProject;
};

const getAllProjects = async () => {
  return await ProjectModel.find({});
};

const getProjectById = async (id: string) => {
  const project = await ProjectModel.findById(id);
  if (!project) {
    throw new AppError(httpStatus.NOT_FOUND, "Project not found");
  }
  return project;
};

const updateProjectById = async (id: string, payload: IProject) => {
  const updatedProject = await ProjectModel.findByIdAndUpdate(id, payload, {
    new: true,
  });
  if (!updatedProject) {
    throw new AppError(httpStatus.NOT_FOUND, "Project not found");
  }
  return updatedProject;
};

const deleteProjectById = async (id: string) => {
  const deletedProject = await ProjectModel.findByIdAndDelete(id);
  if (!deletedProject) {
    throw new AppError(httpStatus.NOT_FOUND, "Project not found");
  }
  return deletedProject;
};

export const ProjectService = {
  createProject,
  getAllProjects,
  getProjectById,
  updateProjectById,
  deleteProjectById,
};
