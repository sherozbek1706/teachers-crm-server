const User = require("./User");

const { NotFoundError, BadRequestError } = require("../../shared/errors");

const removeUserServices = async ({ params, user }) => {
  const existing = await User.findOne({ _id: params.id });

  if (!existing) {
    throw new NotFoundError("User Not Found!");
  }

  if(user.id == existing.id){
    throw new BadRequestError("Mumkin emas! Admin o'zini o'chirish!")
  }

  const removedUser = await User.findByIdAndDelete({ _id: params.id });

  return removedUser;
};
module.exports = removeUserServices;
