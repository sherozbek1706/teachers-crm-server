const router = require("express").Router();

const mAddUser = [isloggedIn, hasRole(["admin"])];
router.post("/users/login", loginUser);
router.post("/users", mAddUser, addUser);

module.exports = router;
