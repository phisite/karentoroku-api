import {
  createUser,
  getUserById,
  getUsers,
} from "./karentoroku.resolvers";
import { prisma } from "../../tests/setup";

describe("Karentaroku", () => {
  const username1 = "testuser";
  let userId1: number;

  test("should get all users", async () => {
    const result = await getUsers();
    expect(result.length).toBeGreaterThan(0);
  });

  test("should get a user by ID", async () => {
    // We fetch the seeded user 'testuser'
    const user = await prisma.user.findFirstOrThrow({
      where: { username: username1 }
    });

    const result = await getUserById({ id: user.id });
    expect(result.username).toStrictEqual(username1);
  });
});
