import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Icon,
  IconButton,
  useMediaQuery,
} from "@chakra-ui/react";
import Image from "next/image";
import { RiMenuLine } from "react-icons/ri";
import { useDrawer } from "../../contexts/DrawerContext";
import logo from "../../public/fmHorizontalBlue.png";
import { Nav } from "./Nav";

export function Header() {
  const { onOpen, isOpen, onClose } = useDrawer();
  const [isLargerThan414] = useMediaQuery("(min-width: 415px)");
  return (
    <Flex
      px={["2", "4"]}
      as="header"
      w="100%"
      maxWidth={1200}
      h={["20", "40"]}
      mx="auto"
      align="center"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box mr={["0", "7"]} w={["40", "48", "80"]} mt="4">
        <Image src={logo} alt="logo" />
      </Box>
      <Flex>
        {isLargerThan414 ? (
          <Nav direction={isLargerThan414 ? "row" : "column"} />
        ) : (
          <Flex>
            <IconButton
              aria-label="open navigation"
              icon={<Icon as={RiMenuLine} />}
              fontSize="24"
              variant="unstyled"
              onClick={onOpen}
            />
            <Drawer isOpen={isOpen} placement="top" onClose={onClose}>
              <DrawerOverlay>
                <DrawerContent bg="gray.50">
                  <DrawerCloseButton />
                  <DrawerHeader>Navegação</DrawerHeader>
                  <DrawerBody>
                    <Nav direction={isLargerThan414 ? "row" : "column"} />
                  </DrawerBody>
                </DrawerContent>
              </DrawerOverlay>
            </Drawer>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
}
