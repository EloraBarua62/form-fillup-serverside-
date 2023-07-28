// Import files
const { default: mongoose } = require("mongoose");

// Form Data Schema
const formDataSchema = mongoose.Schema({
  // Field: Category
  category_question: {
    type: String,
    required: [true, "Please provide valid question"],
    trim: true,
  },

  // Field: Category
  category: {
    type: Array,
    required: [true, "Please provide valid question"],
  },

  // Field: Item
  item: {
    type: Array,
    required: [true, "Please provide valid question"],
  },

  // Field: Comprehension
  comprehensive_question_type_single: {
    type: String,
    required: [true, "Please provide valid answer"],
    trim: true,
  },
  // Field: Comprehension
  comprehensive_question_one: {
    type: String,
    required: [true, "Please provide valid answer"],
    trim: true,
  },

  // Field: Category
  singleChoice: {
    type: Array,
    required: [true, "Please provide valid question"],
  },

  // Field: Comprehension
  comprehensive_question_type_multiple: {
    type: String,
    required: [true, "Please provide valid answer"],
    trim: true,
  },
  // Field: Comprehension
  comprehensive_question_two: {
    type: String,
    required: [true, "Please provide valid answer"],
    trim: true,
  },

  // Field: Category
  multipleChoice: {
    type: Array,
    required: [true, "Please provide valid question"],
  },

  // Field: Comprehension
  comprehensive_question_three: {
    type: String,
    required: [true, "Please provide valid answer"],
    trim: true,
  },

  // Field: Cloze
  fill_gap: {
    type: String,
    required: [true, "Please provide valid answer"],
    trim: true,
  },

  // Field: Category
  cloze: {
    type: Array,
    required: [true, "Please provide valid question"],
  },
});

const FormData = mongoose.model("FormData" , formDataSchema);
module.exports = FormData;