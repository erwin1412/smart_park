import { Flex, Grid, Image, Stack, Text } from "@chakra-ui/react";
import LoginForm from "../components/Login";
import { Link as RouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import smartParkLogo from '../assets/icons/full-logo.svg'

export default function LoginPage() {
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
    </Grid>
  )
}