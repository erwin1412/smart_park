import { Box, Flex, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import LoginForm from "../component/Login";

export default function LoginPage() {
  return (
    <Box
      w={400}
      mx={'auto'}
    >
      <Flex
        direction={'column'}
        justify={'center'}
        align={'center'}
        height={"100vh"}
        gap={5}
      >
        <LoginForm />
        <Flex>
          <Text>Not yet registered? {' '}
            <ChakraLink
              as={RouterLink}
              to={'/auth/register'}
            >
              Register here
            </ChakraLink>
          </Text>
        </Flex>
      </Flex>
    </Box>
  )
}