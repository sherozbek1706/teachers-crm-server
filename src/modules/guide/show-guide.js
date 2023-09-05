const Guide = require("./Guide");

const showGuideService = async ({ params }) => {
  const guide = await Guide.findById({ _id: params.id });

  return { ...guide._doc, revision: 0 };
};

module.exports = showGuideService;
