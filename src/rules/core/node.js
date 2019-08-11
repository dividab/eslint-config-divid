module.exports = {
  env: {
    node: true,
  },
  rules: {
    "callback-return": "off", // TODO: Motivate
    "global-require": "error",
    "handle-callback-err": "off", // TODO: Motivate
    "no-buffer-constructor": "error",
    "no-mixed-requires": ["off", false], // TODO: Motivate
    "no-new-require": "error",
    "no-path-concat": "error",
    "no-process-env": "off", // TODO: Motivate
    "no-process-exit": "off", // TODO: Motivate
    "no-restricted-modules": "off", // TODO: Motivate
    "no-sync": "off", // TODO: Motivate
  },
};
