import Joi from 'joi';

export const petTypeSchema = Joi.valid('dog', 'cat', 'bird', 'fish').label('PetType');

export const pet = {
  pk: Joi.string().required(),
  sk: Joi.string().required(),
  type: petTypeSchema.optional(),
  name: Joi.string().required(),
  age: Joi.number(),
  createdBy: Joi.string().required(),
};

export const petSchema = Joi.object(pet).label('Pet');
