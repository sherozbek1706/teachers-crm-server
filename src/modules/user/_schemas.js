const Joi = require("joi");

const PostLoginSchema = {
  body: Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
  }),
};

const PostAddUserSchema = {
  body: Joi.object({
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    role: Joi.string()
      .valid(...["admin", "employee"])
      .required(),
    age: Joi.number().required(),
    username: Joi.string().required(),
    password: Joi.string().required(),
  }),
};

module.exports = {
  PostLoginSchema,
  PostAddUserSchema,
};
