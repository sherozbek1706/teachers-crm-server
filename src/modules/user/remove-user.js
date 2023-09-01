const User = require("./User");

const { NotFoundError, BadRequestError } = require("../../shared/errors");

const removeUserServices = async ({ params, user }) => {
  const existing = await User.findOne({ _id: params.id });

  if (!existing) {
    throw new NotFoundError("User Not Found!");
  }

};
module.exports = removeUserServices;
