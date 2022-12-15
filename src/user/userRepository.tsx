import type { User, Prisma } from "@prisma/client";
import { SafeParseReturnType } from "zod";

import { prismaClient } from "../prismaClient";
import { credentialsUserSchema, CredentialsUserSchema } from "./schemas/credentialsUserSchema";
import { googleUserSchema, GoogleUserSchema } from "./schemas/googleUserSchema";
export type { User } from "@prisma/client";

export function findById(
  id: number,
  args: Omit<Prisma.UserFindFirstArgs, "where"> = {}
) {
  return prismaClient.user.findFirst({
    ...args,
    where: {
      id,
    },
  });
}

export function findByEmail(
  email: string,
  args: Omit<Prisma.UserFindUniqueArgs, "where"> = {}
) {
  return prismaClient.user.findUnique({
    ...args,
    where: {
      email,
    },
  });
}

export async function create(
  user?: Partial<User>,
  args: Omit<Prisma.UserCreateArgs, "data"> = {}
) {
  let userValidation: SafeParseReturnType<
    User,
    CredentialsUserSchema | GoogleUserSchema
  >;

  switch (user?.provider) {
    case "credentials":
      userValidation = await credentialsUserSchema.safeParseAsync(user);
      break;
    case "google":
      userValidation = await googleUserSchema.safeParseAsync(user);
      break;
    default:
      return {
        errors: [],
      };
  }

  if (userValidation.success === true) {
    const user = await prismaClient.user.create({
      ...args,
      data: userValidation.data,
    });
    return { user };
  } else {
    return {
      errors: userValidation.error.errors,
    };
  }
}