import { NextFunction, Request, Response } from 'express';

export function globalLogger(req: Request, res: Response, next: NextFunction) {
  console.log(
    `Se realizo una consulta tipo ${req.method} en la ruta ${req.url}, ${new Date().toLocaleDateString()} `,
  );
  next();
}
