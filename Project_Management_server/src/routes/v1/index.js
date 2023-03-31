const express = require("express");

const router = express.Router();

const {
  ClientController,
  ProjectController,
} = require("../../controllers/index");

router.post("/clientCreate", ClientController.createController);
router.get("/fetchAllClient", ClientController.FetchAllClientController);
router.post("/projectCreate", ProjectController.createProjectController);
router.get("/fetchAllProject", ProjectController.FetchAllProjectController);
router.delete("/deleteClient/:id", ClientController.deleteClientController);
router.get("/fetchParticular/:id", ProjectController.FetchIdProjectController);
router.delete("/deleteProject/:id", ProjectController.deleteProjectController);
router.put("/updateProject/:id", ProjectController.updateProjectController);
module.exports = router;
