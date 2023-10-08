import { Card, CardBody, Divider, Flex, FormControl, FormLabel, Heading, Image, Stack, Switch, Text } from "@chakra-ui/react";
import smartParkLogoMark from "../assets/icons/logo-mark.svg"
import smartParkLogoType from "../assets/icons/logo-type.svg"
// import dummyHistory from "../utils/dummyHistory.json"
import { useState, useEffect } from "react"
import { IDummy } from "../interface/IDummy";
// import { format } from 'date-fns'

export default function TicketCard() {
  const [parkingData, setParkingData] = useState<IDummy[]>([]);

  useEffect(() => {
    const data: IDummy[] = JSON.parse(localStorage.getItem('Parking Spot Data') || '[]');
    // data.sort((a, b) => {
    //   const dateA = new Date(a.createdAt)
    //   const dateB = new Date(b.createdAt)

    //   return dateB.getTime() - dateA.getTime()
    // })
    setParkingData(data);
  }, [])

  // const formatDate = (date: string | Date) => {
  //   if (typeof date === 'string') {
  //     date = new Date(date);
  //   }
  //   const formattedDate = format(date, 'MM/dd/yyyy hh:mm a');
  //   return formattedDate;
  // };

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
                  <FormControl display={'flex'} alignItems={'center'} w={'fit-content'}>
                    <FormLabel htmlFor="switch">Open your spot</FormLabel>
                    <Switch id="switch" colorScheme="orange" />
                  </FormControl>
                )}
              </Flex>
            </Stack>
          </CardBody>
        </Card>
      ))}
    </>
  )
}