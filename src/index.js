import express from "express";
import { createSchema, createYoga } from "graphql-yoga";

import { typeDefs } from "./graphql/typeDef";
import { resolvers } from "./graphql/resolvers";

const app = express();
const yoga = createYoga({
  schema: createSchema({
    typeDefs,
    resolvers,
  }),
});

app.use(yoga);

app.listen(3000);
