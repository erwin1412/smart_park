import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useRegister } from "../hooks/useRegister";

export default function RegisterForm() {
  const { changeHandler, handleRegister } = useRegister()
  return (
    <>
      <FormControl isRequired>
        <FormLabel>
          Full Name
        </FormLabel>
        <Input
          type="text"
          name="fullname"
          variant={'flushed'}
          borderColor={'#ED7D3A'}
          onChange={changeHandler}
        />
      </FormControl>

      <FormControl isRequired>
        <FormLabel>
          Username
        </FormLabel>
        <Input
          type="text"
          name="username"
          variant={'flushed'}
          borderColor={'#ED7D3A'}
          onChange={changeHandler}
        />
      </FormControl>

      <FormControl isRequired>
        <FormLabel>
          Email
        </FormLabel>
        <Input
          type="email"
          name="email"
          variant={'flushed'}
          borderColor={'#ED7D3A'}
          onChange={changeHandler}
        />
      </FormControl>

      <FormControl isRequired>
        <FormLabel>
          Password
        </FormLabel>
        <Input
          type="password"
          name="password"
          variant={'flushed'}
          borderColor={'#ED7D3A'}
          onChange={changeHandler}
        />
      </FormControl>

      <FormControl isRequired>
        <FormLabel>
          Phone
        </FormLabel>
        <Input
          type="number"
          name="phone"
          variant={'flushed'}
          borderColor={'#ED7D3A'}
          onChange={changeHandler}
        />
      </FormControl>

      <Button
        w={'full'}
        bgColor={'#ED7D3A'}
        textColor={'white'}
        _hover={{ bgColor: 'gray.200', textColor: 'black' }}
        onClick={handleRegister}
      >
        Register
      </Button>
    </>
  )
}