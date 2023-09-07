const User = require("./User");
const ObjectId = require("mongoose").Types.ObjectId;

const { NotFoundError, ForbiddenError } = require("../../shared/errors");

const showUserServices = async ({ params, user }) => {
  if (user) {
    if (user.role !== "admin") {
      throw new ForbiddenError("This user is not allowed this right!");
    }
  }

  if (!ObjectId.isValid(params.id)) {
    throw new NotFoundError("User Not Found!");
  }

  const existing = await User.findOne({ _id: params.id });

  if (!existing) {
    throw new NotFoundError("User Not Found!");
  }
  const infoGuide = {
    total_guides: 3,
    todo_guides: 2,
    read_guides: 1,
  };
  return { ...existing._doc, ...infoGuide };
};

module.exports = showUserServices;
