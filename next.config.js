// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    REACT_APP_NODE_1: "https://api.s0.t.hmny.io/",
    REACT_APP_NODE_2: "https://api.s0.t.hmny.io/",
    REACT_APP_NODE_3: "https://api.s0.t.hmny.io/",
    REACT_APP_NODE_PRODUCTION: "https://api.s0.t.hmny.io/",
    REACT_APP_CHAIN_ID: 1666600000
  }
};
