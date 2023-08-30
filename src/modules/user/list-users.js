const User = require("./User");

const listUserServices = async ({ query }) => {
  let filter = {};
  let sorted = {};

  const {
    q,
    sort = { by: "", order: "asc" },
  } = query;
  const { by, order } = sort;

  // search ---------------------------------

  if (q) {
    filter[`$or`] = [
      { first_name: { $regex: new RegExp(q, "i") } },
      { last_name: { $regex: new RegExp(q, "i") } },
    ];
  }

};

module.exports = listUserServices;
