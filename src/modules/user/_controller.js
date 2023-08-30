const express = require("express");

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
