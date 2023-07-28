// Import files
const express = require("express");
const router = express.Router();
const addFormDataController = require('../controllers/FormData.controller')


// All routes
router
  .route("/")
  .get(getFormDataController.getFormData)
  .post(addFormDataController.addFormData);

module.exports = router;