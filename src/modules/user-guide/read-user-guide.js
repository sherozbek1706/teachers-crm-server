const { NotFoundError } = require("../../shared/errors");
const UserGuide = require("./UserGuide");

const readUserGuideService = async ({ user, params }) => {
  const list = UserGuide.find({ user_id: user.id });

  const existing = await list.findOne({ _id: params.id, completed: false });

  if (!existing) {
    throw new NotFoundError("User Guide Not Found!");
  }

  const editingUserGuide = await UserGuide.findByIdAndUpdate(
    { _id: params.id },
    { ...existing._doc, completed: true },
    { new: true }
  );

  return editingUserGuide;
};
module.exports = readUserGuideService;
