const UserGuide = require("./UserGuide");

const listUserGuideService = async ({ user }) => {
  const list = await UserGuide.find({ user_id: user.id })
    .populate({
      path: "guide",
      select: "-_id",
    })
    .select("-user_id")
    .lean({ virtuals: true });

  return list;
};
module.exports = listUserGuideService;
