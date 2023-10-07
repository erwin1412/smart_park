import { Box, Button, Flex, Image } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Navigation } from "../components/Navigation";
import smartParkLogo from "../assets/icons/full-logo.svg"

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <Flex justify={'center'} minH={'100vh'}>
      <Box
        w={'30%'}
        position={"sticky"}
        top={0}
        height={"100vh"}
        borderRight={"1px"}
        borderColor={'gray.200'}
      >
        <Box position={'relative'} h={'100vh'}>
          <Flex justify={'center'} pt={10} pb={5}>
            <Image w={100} src={smartParkLogo} />
          </Flex>

          <Navigation />

          <Box
            position={'absolute'}
            bottom={0}
            w={'full'}
            p={5}
          >
            <Button
              w={'full'}
              justifyContent={'left'}
              variant={'ghost'}
            >
              Logout
            </Button>
          </Box>
        </Box>
      </Box>

      <Box
        w={'70%'}
        bgColor={'whitesmoke'}
      >
        {children}
      </Box>
    </Flex>
  )
}