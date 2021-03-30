const isProd = process.env.NODE_ENV === 'production';
module.exports = {
  /* config options here */
  basePath: isProd ? '/cb_web' : '',
  assetPrefix: isProd ? '/cb_web' : '/',
  env: {
    BASE_URL: isProd ? '/cb_web' : '',
    BACKEND_URL: isProd ? 'http://192.167.82.167:17895/' : 'http://192.167.82.167:17895/',
    HODGKIN_HUXLEY_BASE_URL: 'https://192.167.82.167:17895/hh-neuron-builder/hhf-comm',
    SUGGESTION_MIN_LENGTH: 1
  },
}
