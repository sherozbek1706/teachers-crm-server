const { NotFoundError } = require("../../shared/errors");
const Guide = require("./Guide");

const editGuideService = async ({ body, params }) => {
  const existing = await Guide.findOne({ _id: params.id });

  if (!existing) {
    throw new NotFoundError("Guide Not Found!");
  }

  const editGuide = await Guide.findByIdAndUpdate(
    { _id: params.id },
    { ...existing._doc, ...body },
    { new: true }
  );

  return editGuide;
};

module.exports = editGuideService;
