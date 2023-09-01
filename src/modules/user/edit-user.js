const { hashSync } = require("bcryptjs");
const {
  NotFoundError,
  BadRequestError,
  ForbiddenError,
} = require("../../shared/errors");
const User = require("./User");

const editUserServices = async ({ body, params, user }) => {
  const existing = await User.findOne({ _id: params.id });

  if (!existing) {
    throw new NotFoundError("User Not Found!");
  }
  const editedUser = await User.findByIdAndUpdate(
    { _id: params.id },
    { ...existing._doc, ...body },
    { new: true }
  );

  return editedUser;
};

module.exports = editUserServices;
