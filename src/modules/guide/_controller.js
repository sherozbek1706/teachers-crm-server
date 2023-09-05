const express = require("express");

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const addGuide = async (req, res, next) => {
  try {
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
    const result = await listGuideService();
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
const showGuide = async (req, res, next) => {
  try {
    const result = await showGuideService({ params: req.params });
    res.status(200).json({ data: result });
  } catch (error) {
    next(error);
  }
};

