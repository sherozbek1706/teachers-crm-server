const mongoose = require("mongoose");

const UserGuideSchema = new mongoose.Schema(
  {
    guide_id: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "guide",
    },
    user_id: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "user",
    },
    completed: {
      type: mongoose.SchemaTypes.Boolean,
      default: false,
    },
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
