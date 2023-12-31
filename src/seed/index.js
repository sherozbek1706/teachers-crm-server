const mongoose = require("mongoose");
const config = require("../shared/config");

// Collectionslarni import qilib olish.
// Bu joyda yozganimni sababi ko'p Collections ishlatilishi mumkin!
const User = require("../modules/user/User");
const Guide = require("../modules/guide/Guide");
const UserGuide = require("../modules/user-guide/UserGuide");

// Seedlarni import qilib olish.
// Seedlarni bu joyda import qilamiz hammasi
// bir biri bilan aralashib ketmasligi uchun
const UsersSeed = require("./users-seed.js");
const GuideSeed = require("./guide-seed.js");

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

  const seedDB = async () => {
    // Har bitta collectionsga malumot qo'shishdan oldin
    // o'sha collecttionni o'chirish kerek
    await User.deleteMany({});
    await User.insertMany(UsersSeed);

    await Guide.deleteMany({});
    await Guide.insertMany(GuideSeed);

    await UserGuide.deleteMany({});
    // await UserGuide.insertMany();
  };

  seedDB().then(() => {
    mongoose.connection.close();
  });
};

seedData();
