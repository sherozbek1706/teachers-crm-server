const loginUserServices = async ({ body }) => {
  const { username, password } = body;

  const existing = await User.findOne({ username });

  if (!existing) {
    throw new NotFoundError("User Not Found");
  }

};

module.exports = loginUserServices;
