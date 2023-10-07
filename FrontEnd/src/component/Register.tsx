import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useRegister } from "../hooks/useRegister";

export default function RegisterForm() {

  const {changeHandler, handleRegister} = useRegister()
  return (
    <>
      <FormControl isRequired>
        <FormLabel>
          Full Name
        </FormLabel>
        <Input type="text" variant={'filled'} onChange={changeHandler}/>
      </FormControl>

      <FormControl isRequired>
        <FormLabel>
          Username
        </FormLabel>
        <Input type="text" variant={'filled'} onChange={changeHandler}/>
      </FormControl>

      <FormControl isRequired>
        <FormLabel>
          Email
        </FormLabel>
        <Input type="email" variant={'filled'} onChange={changeHandler}/>
      </FormControl>

      <FormControl isRequired>
        <FormLabel>
          Password
        </FormLabel>
        <Input type="password" variant={'filled'} onChange={changeHandler}/>
      </FormControl>

      <FormControl isRequired>
        <FormLabel>
          Phone
        </FormLabel>
        <Input type="number" variant={'filled'} onChange={changeHandler}/>
      </FormControl>

      <Button w={'full'}  onClick={handleRegister}>Register</Button>
    </>
  )
}