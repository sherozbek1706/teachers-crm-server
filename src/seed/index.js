const mongoose = require("mongoose");
const config = require("../shared/config");

// Collectionslarni import qilib olish.
// Bu joyda yozganimni sababi ko'p Collections ishlatilishi mumkin!
const User = require("../modules/user/User");

// Seedlarni import qilib olish.
// Seedlarni bu joyda import qilamiz hammasi
// bir biri bilan aralashib ketmasligi uchun
const UsersSeed = require("./users-seed.js");

const seedData = async () => {
  const uri = `mongodb://${config.db.host}:${config.db.port}/${config.db.name}`;
  mongoose.set("strictQuery", false);
  mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to db");
    })
    .catch((err) => {
      console.log("error", err);
    });

};

seedData();
