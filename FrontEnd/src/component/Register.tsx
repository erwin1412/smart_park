import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react"
import { useRegister } from "../hooks/useRegister"

export default function RegisterForm() {
  const { changeHandler, handleRegister } = useRegister()
  return (
    <>
      <FormControl isRequired>
        <FormLabel>Full Name</FormLabel>
        <Input
          type="text"
          variant={"filled"}
          name="fullname"
          onChange={changeHandler}
        />
      </FormControl>

      <FormControl isRequired>
        <FormLabel>Username</FormLabel>
        <Input
          type="text"
          variant={"filled"}
          name="username"
          onChange={changeHandler}
        />
      </FormControl>

      <FormControl isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          variant={"filled"}
          name="email"
          onChange={changeHandler}
        />
      </FormControl>

      <FormControl isRequired>
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          variant={"filled"}
          name="password"
          onChange={changeHandler}
        />
      </FormControl>

      <FormControl isRequired>
        <FormLabel>Phone</FormLabel>
        <Input
          type="number"
          variant={"filled"}
          name="phone"
          onChange={changeHandler}
        />
      </FormControl>

      <Button w={"full"} onClick={handleRegister}>
        Register
      </Button>
    </>
  )
}
