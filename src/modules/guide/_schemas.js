const Joi = require("joi");

const PostAddGuideSchema = {
  body: Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    notify: Joi.boolean(),
  }),
};

const GetListGuideSchema = {};

const GetShowGuideSchema = {
  params: Joi.object({
    id: Joi.string().required(),
  }),
};

module.exports = {
  PostAddGuideSchema,
  GetListGuideSchema,
  GetShowGuideSchema,
};
