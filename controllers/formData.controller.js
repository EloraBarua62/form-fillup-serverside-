// import files

const { addFormDataService } = require("../services/FormData.services");


// Controller: Add form data
exports.getFormData = async(req , res) => {
    try{
        const formdata = await getFormDataService(req.body);

        res.status(200).json({
            status: "success",
            message: "Form Data retrived",
            data: formdata
        })
    }
    catch(error){
        res.status(400).json({
            status: "fail",
            message: "failed to add data",
            error
        })
    }
}


// Controller: Add form data
exports.addFormData = async(req , res) => {
    try{
        const formdata = await addFormDataService(req.body);

        res.status(200).json({
            status: "success",
            message: "Form Data added",
            data: formdata
        })
    }
    catch(error){
        res.status(400).json({
            status: "fail",
            message: "failed to add data",
            error
        })
    }
}