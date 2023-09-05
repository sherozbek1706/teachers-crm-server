const mongoose = require("mongoose");

const reqType = {
  type: mongoose.SchemaTypes.String,
  required: true,
};

const GuideSchema = new mongoose.Schema(
  {
    title: reqType,
    content: reqType,
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
const Guide = mongoose.model("guide", GuideSchema);
module.exports = Guide;
