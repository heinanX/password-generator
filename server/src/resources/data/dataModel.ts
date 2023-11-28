import Joi from 'joi';

export const dataSchema = Joi.object({
    username: Joi.string(),
    password: Joi.string().required(),
})