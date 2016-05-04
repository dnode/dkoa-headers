'use strict';

module.exports = (ctx, next) => {
  ctx.set({
    'X-Content-Type-Options': 'nosniff',
    'X-Download-Options': 'noopen',
    'X-Frame-Options': 'DENY',
    'X-UA-Compatible': 'IE=edge,chrome=1',
    'X-XSS-Protection': '1; mode=block'
  });
  return next();
};
