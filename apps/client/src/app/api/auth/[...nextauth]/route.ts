import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      authorization: {
        params: {
          prompt: "select_account", // this is needed for user to choose Google account
        },
      },
    }),
  ],
  callbacks: {
    async signIn({ account, profile }) {
      /*if (account.provider === "google") {
        return profile.email_verified && profile.email.endsWith("@example.com");
      }*/
      return true; // Do different verification for other providers that don't have `email_verified`
    },
  },
});

export { handler as GET, handler as POST };
