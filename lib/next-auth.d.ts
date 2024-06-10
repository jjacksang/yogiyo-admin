import NextAuth from "next-auth/next";

declare module "next-auth" {
    interface Session {
        user: {
            id: number;
            nickname: string;
            email: string;
            password: string;
            providerType: string;
            accessToken: string;
            refreshToken: string;
        };
    }
}
