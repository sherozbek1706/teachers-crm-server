const UserGuide = require("./UserGuide");

const readUserGuideService = async ({ user, params }) => {
  const list = UserGuide.find({ user_id: user.id });

  const existing = await list.findOne({ _id: params.id, completed: false });

  if (!existing) {
    throw new NotFoundError("User Guide Not Found!");
  }

};
module.exports = readUserGuideService;
