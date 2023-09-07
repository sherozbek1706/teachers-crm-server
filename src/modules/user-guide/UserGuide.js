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

UserGuideSchema.virtual("guide", {
  ref: "guide",
  localField: "guide_id",
  foreignField: "_id",
  justOne: true,
});

const UserGuide = mongoose.model("user-guide", UserGuideSchema);
module.exports = UserGuide;
