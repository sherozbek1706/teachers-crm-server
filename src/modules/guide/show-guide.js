const Guide = require("./Guide");
const UserGuide = require("../user-guide/UserGuide");
const { NotFoundError } = require("../../shared/errors");
const showGuideService = async ({ params }) => {
  const guide = await Guide.findById({ _id: params.id });

  if (!guide) {
    throw new NotFoundError("Guide Not Found!");
  }

  const userGuides = await UserGuide.find({ guide_id: params.id });

  return { ...guide._doc, revision: userGuides.length };
};

module.exports = showGuideService;
