import { Request, Response, NextFunction } from "express";
import { credential } from "firebase-admin";
import { initializeApp, getApps, getApp } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

let firebaseApp: any;
if (getApps().length === 0) {
  firebaseApp = initializeApp(
    process.env.FIREBASE_AUTH_EMULATOR_HOST
      ? { projectId: process.env.FIREBASE_PROJECT_ID }
      : {
          credential: credential.cert({
            privateKey: (process.env.FIREBASE_PRIVATE_KEY || "").replace(/\\n/g, "\n"),
            clientEmail: process.env.FIREBASE_CLIENT_EMAIL || "",
            projectId: process.env.FIREBASE_PROJECT_ID || "",
          }),
        }
  );
} else {
  firebaseApp = getApp();
}

export const headerAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (process.env.NODE_ENV === 'test') {
    (req as any).firebaseToken = { uid: 'test-uid' };
    return next();
  }
  const authHeader = (req.headers.authorization || '').toString();
  if (authHeader.startsWith("Bearer ")) {
    const token = authHeader.substring(7);
    try {
      const decoded = await getAuth(firebaseApp).verifyIdToken(token);
      (req as any).firebaseToken = decoded;
    } catch (err) {
      console.error("Token verification failed:", err);
      return res.status(401).json({ error: "Unauthorized" });
    }
  }
  next();
};
