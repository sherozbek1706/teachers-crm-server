const Joi = require("joi");

const GetListUserGuidesSchema = {
  query: Joi.object({
    q: Joi.string(),
    filters: {
      completed: Joi.string().valid(...["true", "false"]),
    },
    page: {
      limit: Joi.number(),
      offset: Joi.number(),
    },
  }),
};

const PostReadUserGuidesSchema = {
  params: Joi.object({
    id: Joi.string().required(),
  }),
};

const PostBulkUserGuidesSchema = {
  body: Joi.object({
    guide_id: Joi.string().required(),
    user_ids: Joi.array().unique().required(),
  }),
};

module.exports = {
  GetListUserGuidesSchema,
  PostReadUserGuidesSchema,
  PostBulkUserGuidesSchema,
};
