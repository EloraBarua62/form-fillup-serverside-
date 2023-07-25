// Import files
const FormData = require("../models/FormData");

// Service: Add Form Data
exports.addFormData = async(formInfo) => {
    const form = await FormData.create(formInfo);
    return form;
}