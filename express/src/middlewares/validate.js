import z, { ZodError } from "zod";

const validate = (schema) => {
  return (req, res, next) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        const treefiy = z.treeifyError(error);
        res.status(400).json(treefiy);
      }
      next(error);
    }
  };
};

export {validate};