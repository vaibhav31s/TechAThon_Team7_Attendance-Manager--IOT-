import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ["query"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

/** Copy of a user record without the password hash, safe to send to clients. */
export function omitPassword<T>(user: T): T {
  if (!user || typeof user !== "object") return user;
  const copy = { ...(user as Record<string, unknown>) };
  delete copy.password;
  return copy as T;
}
