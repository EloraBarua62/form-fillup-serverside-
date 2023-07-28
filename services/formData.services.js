// Import files
const FormData = require("../models/FormData");

// Service: Add Form Data
exports.getFormDataService = async(formInfo) => {
    console.log(formInfo)
    const form = await FormData.find(formInfo);
    return form;
}


// Service: Add Form Data
exports.addFormDataService = async(formInfo) => {
    console.log(formInfo)
    const form = await FormData.create(formInfo);
    return form;
}