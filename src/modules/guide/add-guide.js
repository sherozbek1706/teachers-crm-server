const Guide = require("./Guide");

const addGuideServices = async ({ body }) => {
  const { notify = false, ...data } = body;

  const guide = await Guide.create({ ...data });

  return { ...guide._doc, notified: notify };
};

module.exports = addGuideServices;
