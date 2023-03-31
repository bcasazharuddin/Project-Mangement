const { ProjectService } = require("../service/index");

const createProjectController = async (req, res) => {
  try {
    const projectControllerData = await ProjectService.createProjectService(
      req.body
    );
    return res.status(201).json({
      data: projectControllerData,
      success: true,
      message: "Project Create Successfully",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Project is not created",
      error: error,
    });
  }
};

const FetchAllProjectController = async (req, res) => {
  try {
    const fetchAllProjectRepoData =
      await ProjectService.FetchAllProjectService();
    return res.status(201).json({
      data: fetchAllProjectRepoData,
      success: true,
      message: "Project fetch Successfully",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Project fetch unsuccessfully",
      error: error,
    });
  }
};

const FetchIdProjectController = async (req, res) => {
  try {
    const FetchIdProjectControllerData =
      await ProjectService.FetchIdProjectService(req.params.id);
    return res.status(200).json({
      data: FetchIdProjectControllerData,
      success: true,
      message: "successfully fetched particular project",
      err: {},
    });
  } catch (error) {
    console.log("something went wrong in particular project-controller");
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to fetch the particular project",
      err: error,
    });
  }
};

const deleteProjectController = async (req, res) => {
  try {
    const deleteProjectControllerData =
      await ProjectService.deleteProjectService(req.params.id);
    return res.status(201).json({
      data: deleteProjectControllerData,
      success: true,
      message: "Project delete Successfully",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Project is not deleted",
      error: error,
    });
  }
};

const updateProjectController = async (req, res) => {
  try {
    const updateProjectControllerData =
      await ProjectService.updateProjectService(req.params.id, req.body);
    return res.status(201).json({
      data: updateProjectControllerData,
      success: true,
      message: "Project update Successfully",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Project is not update",
      error: error,
    });
  }
};
module.exports = {
  createProjectController,
  FetchAllProjectController,
  FetchIdProjectController,
  deleteProjectController,
  updateProjectController,
};
