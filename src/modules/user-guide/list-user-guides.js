const UserGuide = require("./UserGuide");

const listUserGuideService = async ({ user, query }) => {
  const { filters, page = { limit: 10, offset: 0 } } = query;

  if (filters) {
    if (filters.completed) {
      filters.completed = filters.completed == "true" ? true : false;
    }
  }

  const UserGuides = await UserGuide.find({ user_id: user.id, ...filters });
  const listUserGuides = await UserGuide.find({ user_id: user.id, ...filters })
    .limit(page.limit)
    .skip(page.offset)
    .populate({
      path: "guide",
      select: "-_id",
    })
    .select("-user_id")
    .lean({ virtuals: true });

  const pageInfo = {
    total: UserGuides.length,
    offset: page.offset,
    limit: page.limit,
  };

  const response = {
    data: listUserGuides,
    pageInfo,
  };

  return response;
};
module.exports = listUserGuideService;
