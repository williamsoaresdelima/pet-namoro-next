import * as userRepository from './userRepository'
import bcrypt from 'bcrypt'
import { Session } from 'next-auth';

export async function googleLogin(
    email: string,
    user: Partial<userRepository.User>
  ) {
    const maybeUser = await userRepository.findByEmail(email, {
      select: {
        id: true,
      },
    });
    if (maybeUser === null) {
      const results = await userRepository.create(user);
      if (results.user !== undefined) {
        return {
          success: true,
        };
      }
    } else {
      return {
        success: true,
      };
    }
  
    return {
      success: false,
    };
  }
  

export async function credentialsLogin(email: string, password: string) {
  const maybeUser = await userRepository.findByEmail(email, {
    select: {
      id: true,
      password: true,
    },
  });

  if (maybeUser !== null && maybeUser.password) {
    const isLoginSuccess = await bcrypt.compare(password, maybeUser?.password);
    if (isLoginSuccess) {
      return {
        success: true as true,
        id: maybeUser.id.toString(),
      };
    }
  }

  return {
    success: false as false,
  };
}

export async function getUserSession(email: string) {
  const maybeUser = await userRepository.findByEmail(email);
  const userSession: Session["user"] = {
    userId: maybeUser?.id.toString() ?? "",
    email: maybeUser?.email ?? "",
  };

  return userSession;
}