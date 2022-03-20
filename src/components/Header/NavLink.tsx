import {
  Box,
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

interface NavLinkProps extends ChakraLinkProps {
  title: string;
  href: string;
  isCurrent?: boolean;
}

export function NavLink({ title, href, ...rest }: NavLinkProps) {
  const router = useRouter();
  const path = router.pathname;
  const isCurrent = path === href;
  if (isCurrent) {
    return (
      <Link href={href} passHref>
        <ChakraLink
          display="flex"
          flexDirection="column"
          {...rest}
          color="blue.600"
          _hover={{ textDecoration: "none" }}
          maxW="20"
          alignItems="center"
        >
          <Text fontSize={["sm", "sm", "md"]} fontWeight="medium">
            {title}
          </Text>
          <Box borderBottomRadius="50" w="100%" h="1" bg="gray.600" />
        </ChakraLink>
      </Link>
    );
  }

  return (
    <Link href={href} passHref>
      <ChakraLink
        _hover={{
          color: "blue.600",
        }}
        {...rest}
      >
        <Text fontSize={["sm", "sm", "md"]} fontWeight="medium">
          {title}
        </Text>
      </ChakraLink>
    </Link>
  );
}
