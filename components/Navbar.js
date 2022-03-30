import { ReactNode } from "react";
import {
  Box,
  Flex,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Text,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function Nav() {
  return (
    <>
      <Box bg="gray.900" px={4} color="white">
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <Text as="a" href="/" fontWeight="bold">
              MetaXLauncher
            </Text>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
