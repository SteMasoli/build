const isProd = process.env.NODE_ENV === 'production';
console.log('@@@@isProd', isProd);
module.exports = {
  /* config options here */
  basePath: isProd ? '/cb_web' : '',
  assetPrefix: isProd ? '/cb_web' : '/',
  env: {
    BASE_URL: isProd ? '/cb_web' : '',
    BACKEND_URL: isProd ? 'http://90.147.109.105:17895' : 'http://90.147.109.105:17895',
    HODGKIN_HUXLEY_BASE_URL: 'https://90.147.109.105:17895/hh-neuron-builder/hhf-comm',
    SUGGESTION_MIN_LENGTH: 1
  },
}
