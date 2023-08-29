const express = require("express");
const {
  NotFoundError,
  BadRequestError,
  UnauthorizedError,
  ForbiddenError,
} = require(".");

/**
 * @param {Error} err
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */

module.exports = (err, req, res, next) => {
  let status = 500;
  res.status(status).json({ error: err.message });
};
