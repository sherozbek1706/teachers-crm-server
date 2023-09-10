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

const GetListUserSchema = {
  query: Joi.object({
    q: Joi.string(),
    sort: {
      by: Joi.string().valid(...["age", "id"]),
      order: Joi.string().valid(...["asc", "desc"]),
    },
    filters: {
      role: Joi.string().valid(...["employee", "admin"]),
    },
    page: {
      limit: Joi.number(),
      offset: Joi.number(),
    },
  }),
};

module.exports = {
  PostLoginSchema,
  PostAddUserSchema,
  GetListUserSchema,
};
