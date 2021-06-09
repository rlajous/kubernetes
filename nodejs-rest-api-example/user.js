const mongoose = require("mongoose");
const { Schema } = mongoose;
const { ObjectId } = Schema.Types;
const Joi = require("joi");

const userSchema = new Schema({
  name:     { type: String, minlength: 3, required: true, trim: true },
  lastName: { type: String, minlength: 3, required: true, trim: true },
  age: { type: Number, required: true }, 
  email: {
    type: String,
    maxlenght: 255,
    lowercase: true,
    trim: true
  },

  timestamp: { type: Date, default: Date.now }
});

const User = mongoose.model("User", userSchema);

function validateUserSchema(user) {
  const schema = Joi.object({
    name: Joi.string().required(),
    lastName: Joi.string().required(),
    age: Joi.number().required(),
    email: Joi.string().required(),
  });

  return schema.validate(user);
}

module.exports.User = User;
module.exports.validate = validateUserSchema;