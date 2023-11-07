const http = require("http");
const { postgraphile } = require("postgraphile");
const PgOrderByRelatedPlugin = require("@graphile-contrib/pg-order-by-related");
const ConnectionFilterPlugin = require("postgraphile-plugin-connection-filter");
const PgSimplifyInflectorPlugin = require("@graphile-contrib/pg-simplify-inflector");

require("dotenv").config();

http
  .createServer(
    postgraphile(process.env.DATABASE_URL, "public", {
      schemas: [],
      watchPg: true,
      graphiql: true,
      enhanceGraphiql: true,
      // graphileBuildOptions: {
      //   connectionFilterRelations: true, // default: false
      // },
      appendPlugins: [PgOrderByRelatedPlugin, ConnectionFilterPlugin, PgSimplifyInflectorPlugin],
    })
  )
  .listen(process.env.PORT || 5000);
