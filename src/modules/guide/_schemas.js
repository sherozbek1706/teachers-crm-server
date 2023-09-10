const Joi = require("joi");

const PostAddGuideSchema = {
  body: Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    notify: Joi.boolean(),
  }),
};

const GetListGuideSchema = {
  query: Joi.object({
    q: Joi.string(),
    sort: {
      by: Joi.string().valid(...["id"]),
      order: Joi.string().valid(...["asc", "desc"]),
    },
    page: {
      limit: Joi.number(),
      offset: Joi.number().min(0),
    },
  }),
};

const GetShowGuideSchema = {
  params: Joi.object({
    id: Joi.string().required(),
  }),
};

const PatchEditGuideSchema = {
  params: Joi.object({
    id: Joi.string().required(),
  }),

  body: Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    notify: Joi.boolean(),
  }),
};

module.exports = {
  PostAddGuideSchema,
  GetListGuideSchema,
  GetShowGuideSchema,
  PatchEditGuideSchema,
};
