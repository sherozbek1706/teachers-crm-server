const User = require("./User");

const listUserServices = async ({ query }) => {
  let filter = {};
  let sorted = {};

  const {
    q,
    sort = { by: "", order: "asc" },
    filters,
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
};

module.exports = listUserServices;
