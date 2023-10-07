import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";

export default function RegisterForm() {
  return (
    <>
      <FormControl isRequired>
        <FormLabel>
          Full Name
        </FormLabel>
        <Input type="text" variant={'flushed'} borderColor={'#ED7D3A'} />
      </FormControl>

      <FormControl isRequired>
        <FormLabel>
          Username
        </FormLabel>
        <Input type="text" variant={'flushed'} borderColor={'#ED7D3A'} />
      </FormControl>

      <FormControl isRequired>
        <FormLabel>
          Email
        </FormLabel>
        <Input type="email" variant={'flushed'} borderColor={'#ED7D3A'} />
      </FormControl>

      <FormControl isRequired>
        <FormLabel>
          Password
        </FormLabel>
        <Input type="password" variant={'flushed'} borderColor={'#ED7D3A'} />
      </FormControl>

      <FormControl isRequired>
        <FormLabel>
          Phone
        </FormLabel>
        <Input type="number" variant={'flushed'} borderColor={'#ED7D3A'} />
      </FormControl>

      <Button
        w={'full'}
        bgColor={'#ED7D3A'}
        textColor={'white'}
        _hover={{ bgColor: 'gray.200', textColor: 'black' }}
      >
        Register
      </Button>
    </>
  )
}