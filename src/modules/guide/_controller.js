const express = require("express");
const addGuideServices = require("./add-guide");
const listGuideService = require("./list-guide");
const showGuideService = require("./show-guide");
const editGuideService = require("./edit-guide");

const httpvalidator = require("../../shared/http-validator");

const {
  PostAddGuideSchema,
  GetListGuideSchema,
  GetShowGuideSchema,
  PatchEditGuideSchema,
} = require("./_schemas");

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const addGuide = async (req, res, next) => {
  try {
    httpvalidator({ body: req.body }, PostAddGuideSchema);
    const result = await addGuideServices({ body: req.body });
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
const listGuide = async (req, res, next) => {
  try {
    httpvalidator({ query: req.query }, GetListGuideSchema);
    const result = await listGuideService({ query: req.query });
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
const showGuide = async (req, res, next) => {
  try {
    httpvalidator({ params: req.params }, GetShowGuideSchema);
    const result = await showGuideService({ params: req.params });
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
const editGuide = async (req, res, next) => {
  try {
    httpvalidator({ body: req.body, params: req.params }, PatchEditGuideSchema);
    const result = await editGuideService({
      body: req.body,
      params: req.params,
    });
    res.status(200).json({ data: result });
  } catch (error) {
    next(error);
  }
};
module.exports = {
  addGuide,
  listGuide,
  showGuide,
  editGuide,
};
