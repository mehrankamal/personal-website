import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Mehran Kamal`,
    siteUrl: `https://mehrankamal.tech`,
  },
  plugins: ["gatsby-plugin-typescript"],
};

export default config;
