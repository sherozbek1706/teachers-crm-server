const User = require("./User");

const editUserServices = async ({ body, params }) => {
  const existing = await User.findOne({ _id: params.id });

  if (!existing) {
    throw new NotFoundError("User Not Found!");
  }
};

module.exports = editUserServices;
