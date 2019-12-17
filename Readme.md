# PERN (PostgreSql, ExpressJs, ReactJs, NodeJs) stack.

## Start server

1. Change to directory `server`
2. `npm install` or `yarn install`
3. Create `.env` file with the follows params:

   DB_NAME=XXXXX

   DB_USER=XXXXX

   DB_PASS=XXXXX

   DB_HOST=XXXXX

   DB_DIALECT= `one of 'mysql' | 'mariadb' | 'postgres' | 'mssql'`

4. Run migrations `yarn sequelize db:migrate` or `npx sequelize db:migrate`
5. Seed the database `yarn sequelize db:seed:all` or `npx sequelize db:seed:all`

## Start client

1. Change to directory `cliente`
2. `npm install` or `yarn install`
3. `yarn run start` or `npm run-script start` for start developed server
