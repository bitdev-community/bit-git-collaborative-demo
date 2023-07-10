const { Netlify } = require("@teambit/cloud-providers.deployers.netlify");

const {
  splitChunks,
  addSitemap,
} = require("@showoff/dev.transformers.portfolio-transformer");

const { prerenderRoutes } = require("./prerender-routes");

const netlifyConfig = {
  accessToken: process.env.NETLIFY_AUTH_TOKEN,
  stagingSiteName: "portfolio-showoff-staging",
  productionSiteName: "portfolio-showoff-production",
  team: "enlear",
  redirects: "_redirects",
  webpackTransformers: [
    splitChunks,
    (config, context) => addSitemap(config, context, [...prerenderRoutes]),
  ],
};

const PortfolioApp = {
  name: "portfolio",
  entry: [require.resolve("./portfolio.app-root")],
  prerender: {
    routes: ["/"],
  },
  webpackTransformers: [
    splitChunks,
    (config, context) => addSitemap(config, context, [...prerenderRoutes]),
  ],
  deploy: Netlify.deploy(netlifyConfig),
};

module.exports.default = PortfolioApp;
