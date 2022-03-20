import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta
          name="description"
          content="FM Magalhães engenharia e construções"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex px={["2"]} maxWidth={1200} mx="auto" direction="column">
        <Flex w="100%" my="6" mx="auto">
          <SimpleGrid
            gap="4"
            minChildWidth={["280px", "400px"]}
            mx="auto"
            flex="1"
          >
            <Box p="2" bg="gray.800" borderRadius={8}>
              <Text fontSize="lg" color="gray.50">
                Inscritos
              </Text>
            </Box>
            <Box p="2" bg="gray.800" borderRadius={8}>
              <Text fontSize="lg" color="gray.50">
                Teste
              </Text>
            </Box>
            <Box p="2" bg="gray.800" borderRadius={8}>
              <Text fontSize="lg" color="gray.50">
                3333
              </Text>
            </Box>
          </SimpleGrid>
        </Flex>
      </Flex>
    </>
  );
};
export default Home;

// export const getStaticProps: GetStaticProps = async () => {
//   const { data, loading, networkStatus } = await client.query({
//     query: GET_MENUS,
//   });

//   //console.log("data", data);
//   return {
//     props: {
//       data: {
//         menus: {
//           headerMenus: data?.headerMenus?.edges,
//           footerMenus: data?.footerMenus?.edges,
//         },
//       },
//     },
//   };
// };
