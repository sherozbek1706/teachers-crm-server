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
    q: Joi.string().allow(""),
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

const GetShowUserSchema = {
  params: Joi.object({
    id: Joi.string().required(),
  }),
};

const PatchEditUserSchema = {
  params: Joi.object({
    id: Joi.string().required(),
  }),
  body: Joi.object({
    first_name: Joi.string(),
    last_name: Joi.string(),
    role: Joi.string().valid(...["admin", "employee"]),
    age: Joi.number(),
    username: Joi.string(),
    password: Joi.string(),
  }),
};

const DeleteRemoveUserSchema = {
  params: Joi.object({
    id: Joi.string().required(),
  }),
};

module.exports = {
  PostLoginSchema,
  PostAddUserSchema,
  GetListUserSchema,
  GetShowUserSchema,
  PatchEditUserSchema,
  DeleteRemoveUserSchema,
};
