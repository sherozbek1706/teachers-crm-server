const router = require("express").Router();
const { isloggedIn, hasRole } = require("../../shared/auth");
const {
  loginUser,
  addUser,
  listUser,
  showUser,
  editUser,
} = require("./_controller");

const mAddUser = [isloggedIn, hasRole(["admin"])];
const mListUser = [isloggedIn, hasRole(["admin"])];
const mShowUser = [isloggedIn];
const mEditUser = [isloggedIn];

router.post("/users/login", loginUser);
router.post("/users", mAddUser, addUser);
router.get("/users", mListUser, listUser);
router.get("/users/:id", mShowUser, showUser);
router.patch("/users/:id", mEditUser, editUser);

module.exports = router;
