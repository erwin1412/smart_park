import { Box, Flex, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import RegisterForm from "../component/Register";

export default function RegisterPage() {
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
        <RegisterForm />
        <Flex>
          <Text>Have an account? {' '}
            <ChakraLink
              as={RouterLink}
              to={'/auth/login'}
            >
              Login
            </ChakraLink>
          </Text>
        </Flex>
      </Flex>
    </Box>
  )
}