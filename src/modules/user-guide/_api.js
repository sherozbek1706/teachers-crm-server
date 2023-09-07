const { listUserGuides, readUserGuides } = require("./_controller");
const { isloggedIn, hasRole } = require("../../shared/auth");
const isMongoId = require("../../shared/validator/isMongoId");
const router = require("express").Router();

const mListUserGuides = [isloggedIn];
const mReadUserGuides = [isloggedIn, isMongoId];

router.get("/user-guides", mListUserGuides, listUserGuides);
router.post("/user-guides/:id/read", mReadUserGuides, readUserGuides);

module.exports = router;
