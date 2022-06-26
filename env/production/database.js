const parse = require('pg-connection-string').parse;
const config = parse(process.env.DATABASE_URL);
module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: 'ec2-54-227-248-71.compute-1.amazonaws.com',
      port: 5432,
      database: 'd670kjg3kfdp3b',
      user: 'vwpaqjmybrnacy',
      password: '498acfd928d0512bbf87631bc6d7e662d80f33f086a3d6663f8d7acdbe181892',
      ssl: {
        rejectUnauthorized: false
      },
    },
    debug: false,
  },
});
