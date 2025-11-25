import { Request, Response } from "express";
import {
  CreateEventTypeCodec,
  CreateUserCodec,
} from "./karentoroku.interfaces";
import {
  createEventType,
  createUser,
  getEventTypes,
  getUserById,
  getUserByIdToken,
  getUsers,
} from "./karentoroku.resolvers";

export const getIndexHandler = (req: Request, res: Response) => {
  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");

  res.status(200).end(`Hello!`);
};

export const createUserHandler = async (req: Request, res: Response) => {
  const args = req?.body;

  if (CreateUserCodec.decode(args)._tag === "Right") {
    try {
      const result = await createUser({
        name: args.name,
        username: args.username,
        idToken: args.idToken,
      });
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json({
        error: String(e),
      });
    }
  } else {
    res.status(500).json({ error: "ERROR: invalid request (CreateUserCodec)" });
  }
};

export const getUsersHandler = async (req: Request, res: Response) => {
  try {
    const result = await getUsers();
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

export const getUserByIdHandler = async (req: Request, res: Response) => {
  const args = req?.body;

  if (typeof args.id === "number") {
    try {
      const result = await getUserById({
        id: args.id,
      });
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json({
        error: String(e),
      });
    }
  } else {
    res.status(500).json({ error: "ERROR: invalid request (getUser)" });
  }
};

export const getUserByIdTokenHandler = async (req: Request, res: Response) => {
  const args = req?.body;

  if (typeof args.idToken === "string") {
    try {
      const result = await getUserByIdToken({
        idToken: args.idToken,
      });
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json({
        error: String(e),
      });
    }
  } else {
    res
      .status(500)
      .json({ error: "ERROR: invalid request (getUserByIdToken)" });
  }
};

export const createEventTypeHandler = (req: Request, res: Response) => {
  const body = req.body;
  console.log(body);
  console.log(CreateEventTypeCodec.decode(body));
  if (CreateEventTypeCodec.decode(body)._tag === "Right") {
    return createEventType(body)
      .then((response) => res.status(200).send(response))
      .catch((error) => res.status(500).send(error));
  } else {
    res.status(500).send("Failed to validate codec");
  }
};

// export const createLocationHandler = (req: Request, res: Response) => {
//   const body = req.body;
//   console.log(body)
//   console.log(CreateLocationCodec.decode(body));
//   if (CreateEventTypeCodec.decode(body)._tag === "Right") {
//     return createTimeSelect(body)
//       .then((response) => res.status(200).send(response))
//       .catch((error) => res.status(500).send(error));
//   } else {
//     res.status(500).send("Failed to validate codec");
//   }
// };

export const getEventTypeHandler = async (req: Request, res: Response) => {
  const body = req?.body;
  try {
    const result = await getEventTypes();
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};
