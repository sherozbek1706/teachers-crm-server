const express = require("express");
const { UnauthorizedError } = require("../errors");
const jwt = require("jsonwebtoken");

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */

const isLoggedIn = async (req, res, next) => {
  try {
  } catch (error) {
    next(new UnauthorizedError(error.message));
  }
};

module.exports = isLoggedIn;
