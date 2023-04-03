import knex from 'knex';
import parse from 'pg-connection-string';

export const getConnection = () =>
  // eslint-disable-next-line new-cap
  new knex({
    client: 'pg',
    connection: parse(process.env.PG_CONNECTION_STRING),
    searchPath: ['knex', 'public']
  });
