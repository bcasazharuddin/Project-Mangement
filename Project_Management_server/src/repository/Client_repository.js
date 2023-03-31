const { Client } = require("../models/index");

const createClientRepo = async (data) => {
  try {
    const clientRepoData = await Client.create(data);
    return clientRepoData;
  } catch (error) {
    console.log("Something went in Client repository");
    throw { error };
  }
};

const FetchAllClientRepo = async () => {
  try {
    const fetchAllClientRepoData = await Client.findAll();
    return fetchAllClientRepoData;
  } catch (error) {
    console.log("Something went in Fetch All Data Client repository");
    throw { error };
  }
};

const deleteClientRepo = async (id) => {
  try {
    await Client.destroy({
      where: { id: id },
    });
    return true;
  } catch (error) {
    console.log("Something went in Delete Data Client repository");
    throw { error };
  }
};
module.exports = { createClientRepo, FetchAllClientRepo, deleteClientRepo };
