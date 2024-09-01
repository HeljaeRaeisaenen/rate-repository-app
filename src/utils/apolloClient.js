import { ApolloClient, InMemoryCache } from "@apollo/client";

const createApolloClient = () => {
  return new ApolloClient({
    uri: "http://10.112.24.39:4000/graphql",
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
