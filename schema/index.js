import {gql} from "apollo-server-express";
import {queryResolvers} from "./resolvers/query.js";

const helloType = gql`
type Query {
  hello: String
}
`;

export const typeDefs = [
  helloType,
];

export const resolvers = [
  queryResolvers,
];
