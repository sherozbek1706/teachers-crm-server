const UserGuide = require("./UserGuide");
const Guide = require("../guide/Guide");
const User = require("../user/User");
const ObjectId = require("mongoose").Types.ObjectId;
const { NotFoundError } = require("../../shared/errors");

const bulkUserGuideService = async ({ body }) => {
  const { guide_id, user_ids } = body;

  const usersList = await User.find();
  let haveErr = false;

  if (!ObjectId.isValid(guide_id)) {
    throw new NotFoundError("Sorry, Guide Id incorrect!");
  }

  const existingGuide = await Guide.findById({ _id: guide_id });

  if (!existingGuide) {
    throw new NotFoundError("Guide Not Found!");
  }

  user_ids.forEach((user_id) => {
    let existingUser = usersList.find((u) => u.id == user_id);

    if (!existingUser) {
      haveErr = true;
    }
  });

  if (haveErr) {
    throw new NotFoundError("Sorry, User Id incorrect!");
  }

  const usersGuideList = [];

  user_ids.forEach(async (user_id) => {
    const userGuideObj = {
      guide_id,
      user_id,
    };

    usersGuideList.push(userGuideObj);
  });

  const createdUserGuides = await UserGuide.insertMany(usersGuideList);

  return createdUserGuides;
};

module.exports = bulkUserGuideService;
