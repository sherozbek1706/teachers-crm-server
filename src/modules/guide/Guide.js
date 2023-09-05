const mongoose = require("mongoose");

const reqType = {
  type: mongoose.SchemaTypes.String,
  required: true,
};

const GuideSchema = new mongoose.Schema(
  {
    title: reqType,
    content: reqType,
    notify: {
      type: mongoose.SchemaTypes.Boolean,
      default: false,
    },
  },
  }
);
