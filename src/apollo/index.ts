import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  DefaultOptions,
  HttpLink,
} from "@apollo/client";

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: "no-cache",
    errorPolicy: "ignore",
  },
  query: {
    fetchPolicy: "no-cache",
    errorPolicy: "all",
  },
};

const cache = new InMemoryCache({
  resultCaching: false,
});

// const customFetch = (uri: string, options = {}) => {
//   return fetch(uri, options).then((response) => {
//     if (response.status >= 500) {
//       // or handle 400 errors
//       return Promise.reject(response.status);
//     }
//     return response;
//   });
// };

const link = createHttpLink({
  uri: `${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/graphql`,
});

// const link = new HttpLink({
//   uri: `${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/graphql`,
//   credentials: "include",
// });

// console.log(
//   "process.env.next_wordpress",
//   process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL
// );

const client = new ApolloClient({
  link,
  cache,
  defaultOptions,
});

export default client;
