import { Request, Response, NextFunction } from 'express';

const reply = (fn: (req: Request, res: Response, next: NextFunction) => void) => {
  return (req: Request, res: Response, next: NextFunction) => {
    return Promise.resolve(fn(req, res, next))
      .then((data) => {
        res.send({ data });
      })
      .catch((err) => next(err));
  };
};

export { reply };
