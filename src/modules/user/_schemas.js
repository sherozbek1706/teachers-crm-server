const Joi = require("joi");

const PostLoginSchema = {
  body: Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
  }),
};

module.exports = {
  PostLoginSchema,
};
