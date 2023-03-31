const { ProjectRepo } = require("../repository/index");

const createProjectService = async (data) => {
  try {
    const ProjectServiceData = await ProjectRepo.createProjectRepo(data);
    return ProjectServiceData;
  } catch (error) {
    console.log("Something went wrong in Project Service");
    throw { error };
  }
};

const FetchAllProjectService = async () => {
  try {
    const fetchAllProjectServiceData = await ProjectRepo.FetchAllProjectRepo();
    return fetchAllProjectServiceData;
  } catch (error) {
    console.log("Something went in Fetch All Data Project service");
    throw { error };
  }
};

const FetchIdProjectService = async (id) => {
  try {
    const FetchIdProjectServiceData = await ProjectRepo.FetchIdProjectRepo(id);
    return FetchIdProjectServiceData;
  } catch (error) {
    console.log("Something went in Fetch particular Data Project service");
    throw { error };
  }
};

const deleteProjectService = async (id) => {
  try {
    const deleteProjectServiceData = await ProjectRepo.deleteProjectRepo(id);
    return deleteProjectServiceData;
  } catch (error) {
    console.log("Something went in Delete Data Project service");
    throw { error };
  }
};

const updateProjectService = async (id, data) => {
  try {
    const updateProjectServiceData = await ProjectRepo.UpdateProjectRepo(
      id,
      data
    );
    return updateProjectServiceData;
  } catch (error) {
    console.log("something went wrong in update Project service");
    throw { error };
  }
};

module.exports = {
  createProjectService,
  FetchAllProjectService,
  FetchIdProjectService,
  deleteProjectService,
  updateProjectService,
};
