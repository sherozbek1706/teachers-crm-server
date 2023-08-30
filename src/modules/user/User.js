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
  },
  {
    versionKey: false,
    id: true,
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
      },
    },
  }
);
const User = mongoose.model("user", UserSchema);
module.exports = User;
