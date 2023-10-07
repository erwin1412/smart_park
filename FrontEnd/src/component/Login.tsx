import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useLogin } from "../hooks/useLogin";

export default function LoginForm() {
  const {changeHandler, handleLogin} = useLogin()
  return (
    <>
      <FormControl isRequired>
        <FormLabel>
          Username
        </FormLabel>
        <Input type="text" variant={'filled'} onChange={changeHandler}/>
      </FormControl>

      <FormControl isRequired>
        <FormLabel>
          Password
        </FormLabel>
        <Input type="password" variant={'filled'} onChange={changeHandler}/>
      </FormControl>

      <Button w={'full'} onClick={handleLogin}>Login</Button>
    </>
  )
}