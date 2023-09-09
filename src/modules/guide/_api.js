const { addGuide, listGuide, showGuide, editGuide } = require("./_controller");
const { hasRole, isloggedIn } = require("../../shared/auth");
const isMongoId = require("../../shared/validator/isMongoId");
const router = require("express").Router();

const mAddGuide = [isloggedIn, hasRole(["admin"])];
const mListGuide = [isloggedIn];
const mShowGuide = [isloggedIn, isMongoId];
const mEditGuide = [isloggedIn, isMongoId, hasRole(["admin"])];

router.post("/guides", mAddGuide, addGuide);
router.get("/guides", mListGuide, listGuide);
router.get("/guides/:id", mShowGuide, showGuide);
router.patch("/guides/:id", mEditGuide, editGuide);

module.exports = router;
