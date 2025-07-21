import Credentials from "next-auth/providers/credentials";

// Dummy user for demo purposes
export const user = {
  id: 1,
  name: "Demo User",
  email: "demo@example.com",
  // Add other fields as needed
};

import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID as string,
      clientSecret: process.env.AUTH_GOOGLE_SECRET as string,
    }),
    GithubProvider({
      clientId: process.env.AUTH_GITHUB_ID as string,
      clientSecret: process.env.AUTH_GITHUB_SECRET as string,
    }),
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email } = credentials as {
          email: string;
          password: string;
        };

        if (user.email === email) {
          // For demo purposes, any password is accepted
          return user as any;
        }

        return null;
      },
    }),
  ],
  secret: process.env.AUTH_SECRET,

  session: {
    strategy: "jwt",
  },
  debug: process.env.NODE_ENV !== "production",
};
