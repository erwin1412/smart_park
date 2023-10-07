import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";

export default function LoginForm() {
  return (
    <>
      <FormControl isRequired>
        <FormLabel>
          Username
        </FormLabel>
        <Input type="text" variant={'flushed'} borderColor={'#ED7D3A'} />
      </FormControl>

      <FormControl isRequired>
        <FormLabel>
          Password
        </FormLabel>
        <Input type="password" variant={'flushed'} borderColor={'#ED7D3A'} />
      </FormControl>

      <Button
        w={'full'}
        bgColor={'#ED7D3A'}
        textColor={'white'}
        _hover={{ bgColor: 'gray.200', textColor: 'black' }}
      >
        Login
      </Button>
    </>
  )
}