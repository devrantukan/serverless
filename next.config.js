module.exports = {
    webpack: (config, { isServer }) => {
        if (!isServer) {
          config.resolve = {
            ...config.resolve,
            fallback: {
              net: false,
              dns: false,
              tls: false,
              fs: false,
              request: false,
            },
          };
        }
        return config;
      }
      
  };

  