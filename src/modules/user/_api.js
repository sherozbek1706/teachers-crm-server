const router = require("express").Router();
const { isloggedIn, hasRole } = require("../../shared/auth");
const isMongoId = require("../../shared/validator/isMongoId");
const {
  loginUser,
  addUser,
  listUser,
  showUser,
  editUser,
  removeUser,
} = require("./_controller");

const mAddUser = [isloggedIn, hasRole(["admin"])];
const mListUser = [isloggedIn, hasRole(["admin"])];
const mShowUser = [isloggedIn];
const mEditUser = [isloggedIn];
const mRemoveUser = [isloggedIn, hasRole(["admin"]), isMongoId];

router.post("/users/login", loginUser);
router.post("/users", mAddUser, addUser);
router.get("/users", mListUser, listUser);
router.get("/users/:id", mShowUser, showUser);
router.patch("/users/:id", mEditUser, editUser);
router.delete("/users/:id", mRemoveUser, removeUser);

module.exports = router;
