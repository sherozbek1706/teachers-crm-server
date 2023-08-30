const { hashSync } = require("bcryptjs");
const User = require("./User");
const { BadRequestError } = require("../../shared/errors");
const { user_roles } = require("../../shared/const");
const addUserServices = async ({ body }) => {
  const { username, password, ...data } = body;

  const existed = await User.findOne({ username });

  if (existed) {
    throw new BadRequestError("This username already existed!");
  }

  if (!user_roles.includes(body.role)) {
    throw new BadRequestError("This role invalid!");
  }

  const hashedPassword = hashSync(password, 10);

  const createdUser = await User.create({
    ...data,
    username,
    password: hashedPassword,
  });
  return createdUser;
};

module.exports = addUserServices;
