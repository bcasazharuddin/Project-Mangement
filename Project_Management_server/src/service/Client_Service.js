const { ClientRepo } = require("../repository/index");

const createClientService = async (data) => {
  try {
    const clientServiceData = await ClientRepo.createClientRepo(data);
    return clientServiceData;
  } catch (error) {
    console.log("Something went wrong in Client Service");
    throw { error };
  }
};

const FetchAllClientService = async () => {
  try {
    const fetchAllClientServiceData = await ClientRepo.FetchAllClientRepo();
    return fetchAllClientServiceData;
  } catch (error) {
    console.log("Something went in Fetch All Data Client service");
    throw { error };
  }
};

const deleteClientService = async (id) => {
  try {
    const deleteClientServiceData = await ClientRepo.deleteClientRepo(id);
    return deleteClientServiceData;
  } catch (error) {
    console.log("Something went in Delete Data Client service");
    throw { error };
  }
};
module.exports = {
  createClientService,
  FetchAllClientService,
  deleteClientService,
};
