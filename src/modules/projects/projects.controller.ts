import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import SendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import { ProjectService } from "./projects.service";

const createProject = catchAsync(async (req: Request, res: Response) => {
  const projectData = req.body;
  const newProject = await ProjectService.createProject(projectData);

  SendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Project created successfully!",
    data: newProject,
  });
});

const getAllProjects = catchAsync(async (req: Request, res: Response) => {
  const projects = await ProjectService.getAllProjects();

  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Projects retrieved successfully!",
    data: projects,
  });
});

const getProjectById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const project = await ProjectService.getProjectById(id);

  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Project retrieved successfully!",
    data: project,
  });
});

const updateProjectById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const projectData = req.body;
  const updatedProject = await ProjectService.updateProjectById(id, projectData);

  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Project updated successfully!",
    data: updatedProject,
  });
});

const deleteProjectById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  await ProjectService.deleteProjectById(id);

  SendResponse(res, {
     statusCode: httpStatus.OK,
     success: true,
     message: "Project deleted successfully!",
     data: undefined
  });
});

export const ProjectController = {
  createProject,
  getAllProjects,
  getProjectById,
  updateProjectById,
  deleteProjectById,
};
