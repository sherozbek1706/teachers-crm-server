const {
  listUserGuides,
  readUserGuides,
  bulkUserGuides,
} = require("./_controller");
const { isloggedIn, hasRole } = require("../../shared/auth");
const isMongoId = require("../../shared/validator/isMongoId");
const router = require("express").Router();

const mListUserGuides = [isloggedIn];
const mReadUserGuides = [isloggedIn, isMongoId];
const mBulkUserGuides = [isloggedIn, hasRole(["admin"])];

router.get("/user-guides", mListUserGuides, listUserGuides);
router.post("/user-guides/:id/read", mReadUserGuides, readUserGuides);
router.post("/user-guides/bulk", mBulkUserGuides, bulkUserGuides);

module.exports = router;
