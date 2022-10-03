// handles request for sign in and sign out

import NextAuth from "next-auth/next";
import { CredentialProvider } from "next-auth/providers/credentials";

export default NextAuth({
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user?._id) {
        token._id = user._id;
      }
      if (user?.isAdmin) {
        token.isAdmin = user.isAdmin;
      }
      return token;
    },

    async session({ session, token }) {
      if (token?._id) {
        session._id = token._id;
      }
      if (token?.isAdmin) {
        session.isAdmin = token.isAdmin;
      }
      return session;
    },
  },
  providers: [

  ]
});
