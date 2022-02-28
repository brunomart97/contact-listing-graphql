import { ApolloServer } from "apollo-server";
import graphql from "./src/graphql";

const server = new ApolloServer({
  ...graphql,
});

server.listen().then(({ url }) => console.log(url));
