const mongoose = require("mongoose");

const reqType = {
  type: mongoose.SchemaTypes.String,
  required: true,
};

const UserSchema = new mongoose.Schema(
  {
    first_name: reqType,
    last_name: reqType,
    role: {
      type: mongoose.SchemaTypes.String,
      enum: ["employee", "admin"],
      default: "employee",
    },
    age: {
      type: mongoose.SchemaTypes.Number,
      required: true,
    },
    username: {
      ...reqType,
      unique: true,
    },
    password: reqType,
  }
);
const User = mongoose.model("user", UserSchema);
module.exports = User;
