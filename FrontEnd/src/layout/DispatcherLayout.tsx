import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import smartParkLogo from "../assets/icons/full-logo.svg"
import { DispatcherNavigation } from "../components/DispatcherNavigation";

interface LayoutProps {
  children: ReactNode
}

export function DispatcherLayout({ children }: LayoutProps) {
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
          <Flex
            direction={'column'}
            justify={'center'}
            align={'center'}
            pt={10}
            pb={5}
          >
            <Image w={100} src={smartParkLogo} />
            <Text fontSize={'smaller'}>For Officers</Text>
          </Flex>

          <DispatcherNavigation />

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