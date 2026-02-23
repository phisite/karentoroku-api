import "dotenv/config";
import express, { Application, Request, Response } from "express";
import cors from "cors";
import { AppRoutes } from "./routes";
import { headerAuth } from "./middleware/headerAuth";

export const app: Application = express();
const corsOptions = {
  origin: true,
  optionsSuccessStatus: 200,
};

app.use(express.json());
app.use(cors(corsOptions));
app.use(headerAuth);

// Health endpoint for quick checks
app.get("/health", (req: Request, res: Response) => {
  res.status(200).json({ status: "ok" });
});

// Auth test endpoint to validate header auth flow
app.get("/authTest", (req: Request, res: Response) => {
  const tokenInfo = (req as any).firebaseToken;
  if (!tokenInfo) return res.status(401).json({ error: "Unauthorized" });
  res.json({ ok: true, uid: tokenInfo.uid });
});

AppRoutes.forEach((route) => {
  app[route.method as keyof Application](route.path, (request: Request, response: Response) => {
    return route.action(request, response);
  });
});
