const express = require("express");
const loginUserServices = require("./login-user");
const addUserServices = require("./add-user");
const listUserServices = require("./list-users");
const showUserServices = require("./show-user");
const editUserServices = require("./edit-user");
const removeUserServices = require("./remove-user");

const httpValidator = require("../../shared/http-validator");

const {
  PostLoginSchema,
  PostAddUserSchema,
  GetListUserSchema,
  GetShowUserSchema,
  PatchEditUserSchema,
} = require("./_schemas");

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */

const loginUser = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, PostLoginSchema);
    const result = await loginUserServices({ body: req.body });

    res.status(200).json({ data: result });
  } catch (error) {
    next(error);
  }
};

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */

const addUser = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, PostAddUserSchema);
    const result = await addUserServices({ body: req.body });

    res.status(201).json({ data: result });
  } catch (error) {
    next(error);
  }
};

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */

const listUser = async (req, res, next) => {
  try {
    httpValidator({ query: req.query }, GetListUserSchema);
    const result = await listUserServices({ query: req.query });

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */

const showUser = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, GetShowUserSchema);

    let result;

    if (req.params.id == "me") {
      result = await showUserServices({ params: req.user });
    } else {
      result = await showUserServices({ params: req.params, user: req.user });
    }

    res.status(200).json({ data: result });
  } catch (error) {
    next(error);
  }
};

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */

const editUser = async (req, res, next) => {
  try {
    httpValidator({ body: req.body, params: req.params }, PatchEditUserSchema);
    let result;

    if (req.params.id == "me") {
      result = await editUserServices({ body: req.body, params: req.user });
    } else {
      result = await editUserServices({
        body: req.body,
        params: req.params,
        user: req.user,
      });
    }

    res.status(200).json({ data: result });
  } catch (error) {
    next(error);
  }
};

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */

const removeUser = async (req, res, next) => {
  try {
    const result = await removeUserServices({
      params: req.params,
      user: req.user,
    });

    res.status(200).json({ data: result });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  loginUser,
  addUser,
  listUser,
  showUser,
  editUser,
  removeUser,
};
