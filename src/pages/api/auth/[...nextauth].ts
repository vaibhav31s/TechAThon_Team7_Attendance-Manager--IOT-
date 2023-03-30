// @ts-nocheck
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import { prisma } from "../../../utils/db";
// import { PrismaClient } from '@prisma/client';
// const prisma = new PrismaClient({ log: ['query'] });

const createIfNotExists = async (
  name: string,
  email: string,
  avatar: string,
  role: string
) => {
  const userExists = await prisma.user.findFirst({
    where: {
      email: email,
    },
  });
  if (!userExists) {
    // create user in database
    const res = await prisma.user.create({
      data: {
        name: name,
        email: email,
        avatar: avatar,
        role: role,
      },
    });
    return res;
  }
  return userExists!;
};

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      async authorize(credentials,req) {
          

          const {email,password,_id} = credentials;
          const user = await prisma.user.findFirst({
            where: {
              // @ts-ignore
              email: email,
            },
            select: {
              id: true,
              name: true,
              avatar: true,
              email: true,
              password: true,
            },
          });
          
          if (!user) {
            res.status(400).json({ message: "User does not exist" });
            return null; 
          }
          
          
          const isMatch = password === user.password;
          console.log(isMatch)
          // if (!isMatch) {
          //   res.status(400).json({ message: "Wrong Password!" });
          //   return null;
          // }
  
          return user;

      }
  })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/login',
    },
  callbacks: {
    async signIn({ user, profile }) {
      console.log("user", user);
      const newUser = await createIfNotExists(
        user.name,
        user.email,
        user.image,
        user.role
      );
      user.id = newUser.id;
      return true;
    },
    async session({ session, token }) {
      session.user.uid = token.sub;
      const user = await createIfNotExists(
        session.user.name,
        session.user.email,
        session.user.image,
        session.user.role
      );
      console.log("user", user);
      session.user.id = user.id;
      session.user.avatar = user.avatar;
      session.user.tag = user.username;
      session.user.role = user.role;
      return session;
    },
  },
};

export default NextAuth(authOptions);
