const Guide = require("./Guide");

const listGuideService = async () => {
  const listGuides = await Guide.find();

  return listGuides;
};

module.exports = listGuideService;
