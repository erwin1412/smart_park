import { Button, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from "@chakra-ui/react";
// import dummyMalls from "../utils/dummyMalls.json"
import { useNavigate } from "react-router-dom";
import { IMall } from "../interface/IMall"
import useGetMallList from "../hooks/useGetMallList";

export default function MallList() {
  const navigate = useNavigate()

  const { mallList } = useGetMallList()
  const malls = Array.isArray(mallList) && mallList.length > 0 ? mallList : [];
  return (
    <>
      {malls.map((mall:IMall) => (
          <Card w={'sm'} key={mall.id}>
            <CardBody>
              <Image
                borderRadius={'md'}
                src={typeof mall.image === "string" ? mall.image : ""}
                w={'full'}
                h={'15em'}
                objectFit={'cover'}
              />
              <Stack mt={6}>
                <Heading size={'md'}>{mall.name}</Heading>
                <Text>{mall.district}</Text>
                <Text>{mall.address}</Text>
              </Stack>
            </CardBody>
            <Divider borderColor={'gray.200'} />
            <CardFooter>
              <Button
                w={'full'}
                onClick={() => navigate('/reservation')}
                bgColor={'#ED7D3A'}
                textColor={'white'}
                _hover={{ bgColor: 'gray.200', textColor: 'black' }}
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