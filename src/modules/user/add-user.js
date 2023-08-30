const User = require("./User");
const { BadRequestError } = require("../../shared/errors");
const addUserServices = async ({ body }) => {
  const { username, password, ...data } = body;

  const existed = await User.findOne({ username });

  if (existed) {
    throw new BadRequestError("This username already existed!");
  }

};

module.exports = addUserServices;
