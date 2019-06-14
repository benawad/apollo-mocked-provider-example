import {
  createApolloErrorProvider,
  createApolloMockedProvider,
  createApolloLoadingProvider
} from "apollo-mocked-provider";
import { typeDefs } from "./typeDefs";
import { InMemoryCache } from "apollo-boost";

const cache = new InMemoryCache();

export const ApolloMockedProvider = createApolloMockedProvider(typeDefs, cache);
export const ApolloErrorProvider = createApolloErrorProvider(cache);
export const ApolloLoadingProvider = createApolloLoadingProvider(cache);
