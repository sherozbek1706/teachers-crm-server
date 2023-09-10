const Guide = require("./Guide");

const listGuideService = async ({ query }) => {
  const filter = {};

  const { q } = query;

  if (q) {
    filter[`$or`] = [{ title: { $regex: new RegExp(q, "i") } }];
  }

  const listGuides = await Guide.find({ ...filter });

  return listGuides;
};

module.exports = listGuideService;
