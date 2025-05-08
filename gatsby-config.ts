import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Nate Kane Portfolio`,
    siteUrl: `https://www.yourdomain.tld`,
    author: `Nate Kane`,
    jobTitles: [`Software Engineer`, `Web Developer`],
    developerStartDate: `2020-11-01`, // November 1, 2020
    description: `Portfolio website for Nate Kane, Software Engineer and Web Developer`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-image",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "content",
        "path": "./src/content/"
      },
      __key: "content"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    }
  ]
};

export default config;
