const User = require("./User");
const jwt = require("jsonwebtoken");
const config = require("../../shared/config");
const { NotFoundError, ForbiddenError } = require("../../shared/errors");
const { compareSync } = require("bcryptjs");
const loginUserServices = async ({ body }) => {
  const { username, password } = body;

  const existing = await User.findOne({ username });

  if (!existing) {
    throw new NotFoundError("User Not Found");
  }

  const is_correct = compareSync(password, existing.password);

  if (!is_correct) {
    throw new ForbiddenError("Password incorrect!");
  }

  let decode = {
    id: existing.id,
    role: existing.role,
  };

  const token = jwt.sign({ user: decode }, config.jwt.secret, {
    expiresIn: config.jwt.expirec_in,
  });

  return { token };
};

module.exports = loginUserServices;
