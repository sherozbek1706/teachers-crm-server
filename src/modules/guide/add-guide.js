const Guide = require("./Guide");
const UserGuide = require("../user-guide/UserGuide");
const User = require("../user/User");

const addGuideServices = async ({ body }) => {
  const { notify = false, ...data } = body;

  const guide = await Guide.create({ ...data });

  if (notify) {
    const usersList = await User.find();
    const usersGuideList = [];

    usersList.forEach((user) => {
      const userGuideObj = {
        guide_id: guide.id,
        user_id: user.id,
      };

      usersGuideList.push(userGuideObj);
    });

    await UserGuide.insertMany(usersGuideList);
  }

  return { ...guide._doc, notified: notify };
};

module.exports = addGuideServices;
