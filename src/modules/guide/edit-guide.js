const Guide = require("./Guide");

const editGuideService = async ({ body, params }) => {
  const existing = await Guide.findOne({ _id: params.id });

  if (!existing) {
    throw new NotFoundError("Guide Not Found!");
  }

};

module.exports = editGuideService;
