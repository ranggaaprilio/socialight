import { z } from "zod";

import {
    createTRPCRouter,
    publicProcedure,
    protectedProcedure,
  } from "~/server/api/trpc";


export const signUpRouter = createTRPCRouter({
    submit: publicProcedure
      .input(z.object({ name:z.string(),email: z.string(), password: z.string(),username: z.string()}))
      .mutation(async ({ input: { email, password,name,username }, ctx }) => {

      try {
          //check if email already exists
          const emailExist = await ctx.prisma.user.findUnique({
            where: { email },
          });

          if (emailExist) {
            throw new Error('Email already exists');
          }

          //check if username already exists
          const usernameExist = await ctx.prisma.user.findUnique({
            where: { username },
          });

          if (usernameExist) {
            throw new Error('User already exists');
          }

        const user = await ctx.prisma.user.create({
          data: {
            email,
            password,
            name ,// Assign a valid value to the name property,
            username
          },
        });
        return {
          id: user.id,
          email: user.email,
        };
      } catch (error) {
        if (error instanceof Error) {
          throw new Error(error.message);
        }
        return  error;
      }
      }),
  });