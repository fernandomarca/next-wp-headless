import { ApolloProvider } from "@apollo/client";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import client from "../apollo";
import { Header } from "../components/Header";
import { DrawerProvider } from "../contexts/DrawerContext";
import "../styles/global.scss";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        <DrawerProvider>
          <Header />
          <Component {...pageProps} />
        </DrawerProvider>
      </ChakraProvider>
    </ApolloProvider>
  );
}
export default MyApp;
