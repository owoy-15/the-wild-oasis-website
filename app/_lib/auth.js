import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { createGuest, getGuest } from "./data-service";

const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],

  callbacks: {
    // This runs on every request to a protected route.
    // needs to return either true or false.
    // If we return true, then the current user is authorized to go
    // through onto that route that is being protected.
    authorized({ auth, request }) {
      return !!auth?.user; // some trick
    },

    // this callback here actually runs Now, this callback here actually runs
    // before the actual signup process happens. all kinds of operations here
    // that are associated with the signing in process.
    // You must return true or false (though here it's empty).
    // and this function get passed some perameter datas
    async signIn({ user, account, profile }) {
      try {
        const exixtingGuest = await getGuest(user.email);

        if (!exixtingGuest)
          await createGuest({ email: user.email, fullName: user.name });

        return true;
      } catch (error) {
        return false;
      }
    },

    // Runs: Every time a session is created or accessed.
    // Purpose: Modify or extend the session object (e.g. add user roles).
    // Must return: The session object.
    async session({ session, user }) {
      // we cannot do this right here in design signIn callback,
      // because at this point the session hasn't been created yet.
      try {
        const guest = await getGuest(session.user.email);

        // mutate session obj
        session.user.guestId = guest.id;

        return session;
      } catch (error) {
        return session;
      }
    },
  },

  pages: {
    // if authorized return false, it will go to this page
    signIn: "/login", // redirect to login page
  },
  //   CredentialProviders: [], // if you want to add custom credentials or your own auth provider
};

export const {
  auth, // function - retrieve the current session
  signIn, // function
  signOut,
  handlers: { GET, POST }, // route handlers for Next.js API routes
} = NextAuth(authConfig);
