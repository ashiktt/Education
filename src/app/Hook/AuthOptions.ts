import type { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import CredentialsProvider from 'next-auth/providers/credentials';
import { prisma } from '@/app/Hook/Prisma/prisma';

export const authOptions:NextAuthOptions  = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: { label: 'Email', type: 'text' },
                password: { label: 'Password', type: 'password' }
            },
            async authorize(credentials) {
                const user = await prisma.user.findFirst({
                    where: { email: credentials?.email }
                })
                if (!user) {
                    return null;
                }
                if (user.password !== credentials?.password) {
                    throw new Error("invalid credentials");
                }
                return { id: user.id, email: user.email, role: user.role };
            },
        }),
    ],
    adapter: PrismaAdapter(prisma),
    pages: {
        signIn: '/',
    },
    session: {
        strategy: "jwt" as const,
        maxAge: 2 * 60 * 60,
    },
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async jwt({ token, user }: { token: any, user: any }) {
            if (user) {
                token.email = user.email;
                token.role = user.role;
                token.userId = user.id;
            }
            return token;
        },
        async session({ session, token }: { session: any, token: any }) {
            session.user = { id: token.userId, role: token.role };
            return session;
        },
    },
};