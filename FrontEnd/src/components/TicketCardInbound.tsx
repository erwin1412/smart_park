import { Button, Card, CardBody, Divider, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import smartParkLogoMark from "../assets/icons/logo-mark.svg"
import smartParkLogoType from "../assets/icons/logo-type.svg"
import { useState, useEffect } from "react"
import { IDummy } from "../interface/IDummy";
// import dummyHistory from "../utils/dummyHistory.json"

export default function TicketCardInbound() {
  const [parkingData, setParkingData] = useState<IDummy[]>([]);
  useEffect(() => {
    const data: IDummy[] = JSON.parse(localStorage.getItem('Parking Spot Data') || '[]');
    setParkingData(data);
  }, [])

  return (
    <>
      {parkingData.map((data, index) => (
        <Card w={'xl'} key={index}>
          <CardBody>
            <Stack spacing={5}>
              <Flex justify={'space-between'}>
                <Image src={smartParkLogoMark} w={50} />
                <Image src={smartParkLogoType} w={100} />
              </Flex>
              <Divider />
              <Flex justify={'space-between'}>
                <Stack>
                  <Heading fontSize={'2xl'}>{data.plateNumber}</Heading>
                  <Text>Plate Number</Text>
                </Stack>
                <Stack>
                  <Heading fontSize={'2xl'} textAlign={'right'}>{data.selectedSpot}</Heading>
                  <Text textAlign={'right'}>Spot Code</Text>
                </Stack>
              </Flex>
              <Flex justify={'space-between'}>
                <Stack>
                  <Heading fontSize={'2xl'}>{data.mallName}</Heading>
                  <Text>Check-In Place</Text>
                </Stack>
                <Stack>
                  <Heading fontSize={'2xl'} textAlign={'right'}>10/8/2023 19:27</Heading>
                  <Text textAlign={'right'}>Check-In Time</Text>
                </Stack>
              </Flex>
              <Divider />
              <Flex justify={'space-between'} align={'center'}>
                <Heading fontSize={'md'}>PARKING TICKET</Heading>
                {data.isBooked === true && (
                  <Button>Checkout</Button>
                )}
              </Flex>
            </Stack>
          </CardBody>
        </Card>
      ))}
    </>
  )
}