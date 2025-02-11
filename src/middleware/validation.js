const Joi = require('joi');

const contactSchema = Joi.object({
  name: Joi.string().required().min(2).max(100),
  email: Joi.string().required().email(),
  phone: Joi.string().pattern(/^\+?[\d\s-]+$/).min(10).max(20),
  address: Joi.string().allow('').max(200)
});

const validateContact = (req, res, next) => {
  const { error } = contactSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

module.exports = { validateContact };