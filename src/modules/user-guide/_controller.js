const express = require("express");
const listUserGuideService = require("./list-user-guides");
const readUserGuideService = require("./read-user-guide");

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const listUserGuides = async (req, res, next) => {
  try {
    const result = await listUserGuideService({ user: req.user });

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
const readUserGuides = async (req, res, next) => {
  try {
    const result = await readUserGuideService({
      user: req.user,
      params: req.params,
    });

    res.status(200).json({ data: result });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  listUserGuides,
  readUserGuides,
};
