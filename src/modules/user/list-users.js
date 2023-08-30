const User = require("./User");

const listUserServices = async ({ query }) => {
  let filter = {};
  let sorted = {};

  const {
    q,
  } = query;
  // search ---------------------------------

  if (q) {
    filter[`$or`] = [
      { first_name: { $regex: new RegExp(q, "i") } },
    ];
  }

};

module.exports = listUserServices;
