import { Button, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from "@chakra-ui/react";
import dummyMalls from "../utils/dummyMalls.json"
import { useNavigate } from "react-router-dom";

export default function MallList() {
  const navigate = useNavigate()
  return (
    <>
      {
        dummyMalls.map((mall) => (
          <Card w={'sm'} key={mall.id}>
            <CardBody>
              <Image
                borderRadius={'md'}
                src={mall.image}
                w={'full'}
                h={'15em'}
                objectFit={'cover'}
              />
              <Stack mt={6}>
                <Heading size={'md'}>{mall.name}</Heading>
                <Text>{mall.location}</Text>
              </Stack>
            </CardBody>
            <Divider borderColor={'gray.200'} />
            <CardFooter>
              <Button
                w={'full'}
                onClick={() => navigate('/reservation')}
                bgColor={'#ED7D3A'}
                textColor={'white'}
                _hover={{bgColor: 'gray.200', textColor: 'black'}}
              >
                View Parking Spot
              </Button>
            </CardFooter>
          </Card>
        ))
      }
    </>
  )
}