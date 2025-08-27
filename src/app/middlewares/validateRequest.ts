import catchAsync from '../utils/catchAsync';
import { ZodObject } from 'zod';

const validateRequest = (schema: ZodObject) => {
  return catchAsync(async (req, res, next) => {
    await schema.parseAsync({
    body: req.body,
    });
    next();
  });
};

export default validateRequest;