import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";




export const getApolloClient = ()=> {
    return new ApolloClient({
        ssrMode: true,
        link: createHttpLink({
          uri: process.env.SERVER_API_URL,
          credentials: 'same-origin'
        }),
        cache: new InMemoryCache(),
      });
}