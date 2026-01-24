import "dotenv/config";
import express, { Application, Request, Response } from "express";
import cors from "cors";
import { AppRoutes } from "./routes";

export const app: Application = express();
const corsOptions = {
    origin: true,
    optionsSuccessStatus: 200,
};

app.use(express.json());
app.use(cors(corsOptions));

AppRoutes.forEach((route) => {
    app[route.method as keyof Application](
        route.path,
        (request: Request, response: Response) => {
            return route.action(request, response);
        }
    );
});
