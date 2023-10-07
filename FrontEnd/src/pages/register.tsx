import { Flex, Grid, Image, Stack, Text } from "@chakra-ui/react";
import RegisterForm from "../components/Register";
import { Link as RouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import smartParkLogo from '../assets/icons/full-logo.svg'

export default function RegisterPage() {
  return (
    <Grid templateColumns={'repeat(2,1fr)'}>
      <Flex
        p={10} height={'100vh'}
        justify={'center'}
        align={'center'}
        bgColor={'whitesmoke'}
      >
        <Stack>
          <Image w={200} src={smartParkLogo} />
          <Text textAlign={'center'}>Save your spot!</Text>
        </Stack>
      </Flex>

      <Flex
        direction={'column'}
        justify={'center'}
        align={'center'}
        height={"100vh"}
        gap={5}
        p={10}
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
    </Grid>
  )
}