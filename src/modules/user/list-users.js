const User = require("./User");

const listUserServices = async ({ query }) => {
  let filter = {};
  let sorted = {};

  const {
    q,
    sort = { by: "", order: "asc" },
    filters,
    page = { limit: 10, offset: 0 },
  } = query;
  const { by, order } = sort;

  // search ---------------------------------

  if (q) {
    filter[`$or`] = [
      { first_name: { $regex: new RegExp(q, "i") } },
      { last_name: { $regex: new RegExp(q, "i") } },
    ];
  }

  // sort ---------------------------------

  if (by == "id") {
    sorted = order == "asc" ? { _id: 1 } : { _id: -1 };
  }

  if (by == "age") {
    sorted = order == "asc" ? { age: 1 } : { age: -1 };
  }

  // filter ---------------------------------

  if (filters) {
    if (filters.role) {
      filters.role = filters.role == "employee" ? "employee" : "admin";
    }
  }

  // pagination ---------------------------------

  const users = await User.find({ ...filter, ...filters }).sort(sorted);
  const list_users = await User.find({ ...filter, ...filters })
    .sort(sorted)
    .limit(page.limit)
    .skip(page.offset);

  const pageInfo = {
    total: users.length,
  };
};

module.exports = listUserServices;
