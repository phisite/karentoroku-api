import express, { Application, Request, Response } from "express";
import cors from "cors";
import { AppRoutes } from "./routes";

const app: Application = express();
const corsOptions = {
  origin: true,
  optionsSuccessStatus: 200,
};

app.use(express.json());
app.use(cors(corsOptions));

app.listen(8000, () => {
  console.log("Server start on port 8000!");
});

AppRoutes.forEach((route) => {
  app[route.method as keyof Application](
    route.path,
    (request: Request, response: Response) => {
      return route.action(request, response);
    }
  );
});

module.exports = app;
