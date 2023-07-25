// Import files
const { default: mongoose } = require("mongoose");

// Form Data Schema
const formDataSchema = mongoose.Schema({
  
  // Field: Category
  category: {
    type: String,
    required: [true, "Please provide valid answer"],
    trim: true,
  },

  // Field: Cloze
  cloze: {
    type: String,
    required: [true, "Please provide valid answer"],
    trim: true,
  },

  // Field: Comprehension
  comprehension: {
    type: String,
    required: [true, "Please provide valid answer"],
    trim: true,
  },
});

const FormData = mongoose.model("FormData" , formDataSchema);
module.exports = FormData;