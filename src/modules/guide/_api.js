const { addGuide, listGuide, showGuide } = require("./_controller");
const { hasRole, isloggedIn } = require("../../shared/auth");
const router = require("express").Router();

const mAddGuide = [isloggedIn, hasRole(["admin"])];
const mListGuide = [isloggedIn];
const mShowGuide = [isloggedIn];

router.post("/guides", mAddGuide, addGuide);
router.get("/guides", mListGuide, listGuide);
router.get("/guides/:id", mShowGuide, showGuide);

module.exports = router;
