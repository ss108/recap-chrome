// babel.config.js
module.exports = (api) => {
  api.cache(true);
  return {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            node: 'current',
          },
        },
      ],
    ],
    env: {
      test: {
        plugins: ['transform-es2015-modules-commonjs'],
      },
    },
  };
};
