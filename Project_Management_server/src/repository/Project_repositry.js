const { Projects } = require("../models/index");

const createProjectRepo = async (data) => {
  try {
    const ProjectRepoData = await Projects.create(data);
    return ProjectRepoData;
  } catch (error) {
    console.log("Something went in Project repository");
    throw { error };
  }
};

const FetchAllProjectRepo = async () => {
  try {
    const fetchAllProjectRepoData = await Projects.findAll();
    return fetchAllProjectRepoData;
  } catch (error) {
    console.log("Something went in Fetch All Data Project repository");
    throw { error };
  }
};

const FetchIdProjectRepo = async (id) => {
  try {
    const FetchIdProjectRepoData = await Projects.findByPk(id);
    console.log(FetchIdProjectRepoData);
    return FetchIdProjectRepoData;
  } catch (error) {
    console.log(
      "something went wrong in getPROJECT DETAILS in PROJECT repository"
    );
    throw { error };
  }
};

const deleteProjectRepo = async (id) => {
  try {
    await Projects.destroy({
      where: { id: id },
    });
    return true;
  } catch (error) {
    console.log("Something went in Delete Data Project repository");
    throw { error };
  }
};
const UpdateProjectRepo = async (id, data) => {
  try {
    const UpdateProjectRepoData = await Projects.update(data, {
      where: {
        id: id,
      },
    });
    return UpdateProjectRepoData;
  } catch (error) {
    console.log("Something went in update particular Project repository");
    throw { error };
  }
};

module.exports = {
  createProjectRepo,
  FetchAllProjectRepo,
  FetchIdProjectRepo,
  deleteProjectRepo,
  UpdateProjectRepo,
};
