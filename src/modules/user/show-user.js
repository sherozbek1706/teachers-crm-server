const showUserServices = async ({ params, user }) => {
  console.log(user);
  if (user) {
    if (user.role !== "admin") {
      throw new ForbiddenError("This user is not allowed this right!");
    }
  }
};

module.exports = showUserServices;
