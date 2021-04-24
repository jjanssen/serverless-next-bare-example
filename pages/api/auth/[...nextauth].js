import NextAuth from "next-auth";
import Providers from "next-auth/providers";

const providers = [
  Providers.GitHub({
    clientId: process.env.GITHUB_ID,
    clientSecret: process.env.GITHUB_SECRET,
  }),
];

const options = {
  providers,
  debug: true,
};

export default (req, res) => NextAuth(req, res, options);
