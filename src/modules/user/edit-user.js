const { hashSync } = require("bcryptjs");
const {
  NotFoundError,
  BadRequestError,
  ForbiddenError,
} = require("../../shared/errors");
const User = require("./User");

const editUserServices = async ({ body, params, user }) => {
  if (user) {
    if (user.role !== "admin") {
      throw new ForbiddenError("This user is not allowed this right!");
    }
  }

  const existing = await User.findOne({ _id: params.id });

  if (!existing) {
    throw new NotFoundError("User Not Found!");
  }

  const existedUsername = await User.findOne({ username: body.username });

  if (existedUsername) {
    throw new BadRequestError("This username already existed!");
  }

  const editedUserObj = {
    first_name: body.first_name ? body.first_name : existing.first_name,
    last_name: body.last_name ? body.last_name : existing.last_name,
    username: body.username ? body.username : existing.username,
  };

  if (existing.role == "admin" || user) {
    editedUserObj.password = body.password
      ? hashSync(body.password, 10)
      : existing.password;
    editedUserObj.role = body.role ? body.role : existing.role;
  }

  const editedUser = await User.findByIdAndUpdate(
    { _id: params.id },
    { ...existing._doc, ...body },
    { new: true }
  );

  return editedUser;
};

module.exports = editUserServices;
