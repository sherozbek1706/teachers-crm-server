const express = require("express");
const loginUserServices = require("./login-user");
const addUserServices = require("./add-user");

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */

const loginUser = async (req, res, next) => {
  try {
    const result = await loginUserServices({ body: req.body });

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
    const result = await addUserServices({ body: req.body });

    res.status(201).json({ data: result });
  } catch (error) {
    next(error);
  }
};
  } catch (error) {
    next(error);
  }
};
  } catch (error) {
    next(error);
  }
};
module.exports = {
  addUser,
};
