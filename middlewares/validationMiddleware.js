const Joi = require('joi');

// Middleware for validating task data
const validateTaskData = (req, res, next) => {
  const schema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string(),
    priority: Joi.number(),
    dueDate: Joi.date(),
    categoryId: Joi.string(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  next();
};

// Middleware for validating category data
const validateCategoryData = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  next();
};

module.exports = { validateTaskData, validateCategoryData };

