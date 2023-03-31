const { ClientService } = require("../service/index");

const createController = async (req, res) => {
  try {
    const clientControllerData = await ClientService.createClientService(
      req.body
    );
    return res.status(201).json({
      data: clientControllerData,
      success: true,
      message: "Client Create Successfully",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "client is not created",
      error: error,
    });
  }
};

const FetchAllClientController = async (req, res) => {
  try {
    const fetchAllClientRepoData = await ClientService.FetchAllClientService();
    return res.status(201).json({
      data: fetchAllClientRepoData,
      success: true,
      message: "Client fetch Successfully",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Client fetch unsuccessfully",
      error: error,
    });
  }
};

const deleteClientController = async (req, res) => {
  try {
    const deleteClientControllerData = await ClientService.deleteClientService(
      req.params.id
    );
    return res.status(201).json({
      data: deleteClientControllerData,
      success: true,
      message: "Client delete Successfully",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "client is not deleted",
      error: error,
    });
  }
};

module.exports = {
  createController,
  FetchAllClientController,
  deleteClientController,
};
