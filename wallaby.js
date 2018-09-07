module.exports = () => {
    return {
      files: [
        '*.js',
      ],
      tests: [
        'test/*Spec.js'
      ],
      env: {
        kind: 'chrome'
      },
      debug: true
    };
  };