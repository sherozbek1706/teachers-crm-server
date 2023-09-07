const { NotFoundError } = require("../../shared/errors");
const Guide = require("./Guide");
const User = require("../user/User");
const UserGuide = require("../user-guide/UserGuide");

const editGuideService = async ({ body, params }) => {
  const { notify = false, ...data } = body;
  const existing = await Guide.findOne({ _id: params.id });

  if (!existing) {
    throw new NotFoundError("Guide Not Found!");
  }

  if (notify) {
    const usersList = await User.find();
    const usersGuideList = [];

    usersList.forEach((user) => {
      const userGuideObj = {
        guide_id: existing.id,
        user_id: user.id,
      };

      usersGuideList.push(userGuideObj);
    });

    await UserGuide.insertMany(usersGuideList);
  }

  const editGuide = await Guide.findByIdAndUpdate(
    { _id: params.id },
    { ...existing._doc, ...data, notified: notify },
    { new: true }
  );

  return editGuide;
};

module.exports = editGuideService;
