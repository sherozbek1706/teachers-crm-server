const Joi = require("joi");

const PostAddGuideSchema = {
  body: Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    notify: Joi.boolean(),
  }),
};

const GetListGuideSchema = {};

module.exports = {
  PostAddGuideSchema,
  GetListGuideSchema,
};
