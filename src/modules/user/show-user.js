const showUserServices = async ({ params, user }) => {
  console.log(user);
  if (user) {
    if (user.role !== "admin") {
      throw new ForbiddenError("This user is not allowed this right!");
    }
  }

  const existing = await User.findOne({ _id: params.id });

  if (!existing) {
    throw new NotFoundError("User Not Found!");
  }
};

module.exports = showUserServices;
