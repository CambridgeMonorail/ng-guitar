module.exports = {
  ci: {
    collect: {
      numberOfRuns: 1,
      url: ['http://localhost:4200/'],
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
