const express = require("express");
const listUserGuideService = require("./list-user-guides");
const readUserGuideService = require("./read-user-guide");
const bulkUserGuideService = require("./bulk-user-guide");

const httpValidator = require("../../shared/http-validator");

const {
  GetListUserGuidesSchema,
  PostReadUserGuidesSchema,
  PostBulkUserGuidesSchema,
} = require("./_schemas");

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const listUserGuides = async (req, res, next) => {
  try {
    httpValidator({ query: req.query }, GetListUserGuidesSchema);

    const result = await listUserGuideService({
      user: req.user,
      query: req.query,
    });

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
const readUserGuides = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, PostReadUserGuidesSchema);

    const result = await readUserGuideService({
      user: req.user,
      params: req.params,
    });

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
const bulkUserGuides = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, PostBulkUserGuidesSchema);
    const result = await bulkUserGuideService({ body: req.body });

    res.status(201).json({ data: result });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  listUserGuides,
  readUserGuides,
  bulkUserGuides,
};
