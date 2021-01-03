module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1330),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '09a0ed74967f38d483bf3f5eaed70f68'),
    },
  },
});
