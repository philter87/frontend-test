import express, { Application, Request, Response, NextFunction } from "express";

const app: Application = express();

app.use("/users", (req: Request, res: Response): void => {
    let users = ["Goon", "Tsuki", "Joe"];
    res.status(200).send(users);
  });

app.use("/", (req: Request, res: Response, next: NextFunction): void => {
  res.json({ message: "Hi" });
});

export default app;