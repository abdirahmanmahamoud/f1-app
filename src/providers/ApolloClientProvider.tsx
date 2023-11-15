import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { PropsWithChildren } from "react";

const client = new ApolloClient({
  uri: `https://${process.env.EXPO_PUBLIC_ACCOUNT_NAME}.stepzen.net/api/${process.env.EXPO_PUBLIC_ENDPOINT_NAME}/__graphql`,
  headers: {
    Authorization: `apikey ${process.env.EXPO_PUBLIC_STEPZEN_API_KEY}`,
  },
  cache: new InMemoryCache(),
});
const ApolloClientProvider = ({ children }: PropsWithChildren) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloClientProvider;
