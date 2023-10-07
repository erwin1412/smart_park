import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useLogin } from "../hooks/useLogin";

export default function LoginForm() {
  const { changeHandler, handleLogin } = useLogin()
  return (
    <>
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

      <Button
        w={'full'}
        bgColor={'#ED7D3A'}
        textColor={'white'}
        _hover={{ bgColor: 'gray.200', textColor: 'black' }}
        onClick={handleLogin}
      >
        Login
      </Button>
    </>
  )
}