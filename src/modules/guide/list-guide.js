const Guide = require("./Guide");

const listGuideService = async ({ query }) => {
  let filter = {};
  let sorted = {};

  const {
    q,
    sort = { by: "", order: "asc" },
    page = { limit: 10, offset: 0 },
  } = query;

  const { by, order } = sort;

  // search

  if (q) {
    filter[`$or`] = [{ title: { $regex: new RegExp(q, "i") } }];
  }

  // sorted
  if (by == "id") {
    sorted = order == "asc" ? { _id: 1 } : { _id: -1 };
  }

  const guides = await Guide.find({ ...filter }).sort(sorted);
  const listGuides = await Guide.find({ ...filter })
    .sort(sorted)
    .limit(page.limit)
    .skip(page.offset);

  const pageInfo = {
    total: guides.length,
    offset: page.offset,
    limit: page.limit,
  };

  const response = {
    data: listGuides,
    pageInfo,
  };

  return response;
};

module.exports = listGuideService;
