import { Button, Card, CardBody, Divider, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import smartParkLogoMark from "../assets/icons/logo-mark.svg"
import smartParkLogoType from "../assets/icons/logo-type.svg"
import { ITicket } from "../interface/ITicket";
import useTicket from "../hooks/useTicket";

// import dummyHistory from "../utils/dummyHistory.json"

export default function TicketCardInbound() {


// const{floorList} = useFl()
    const {ticketList} = useTicket()
    console.log("ticket", ticketList)
  return (
    <>
      {ticketList.map((history: ITicket) => (
        <Card w={'xl'} key={history.floorId?.id}>
          <CardBody>
            <Stack spacing={5}>
              <Flex justify={'space-between'}>
                <Image src={smartParkLogoMark} w={50} />
                <Image src={smartParkLogoType} w={100} />
              </Flex>
              <Divider />
              <Flex justify={'space-between'}>
                <Stack>
                  <Heading fontSize={'2xl'}>{history.noKendaraan}</Heading>
                  <Text>Plate Number</Text>
                </Stack>
                <Stack>
                  <Heading fontSize={'2xl'} textAlign={'right'}> {history.floorId && history?.floorId?.parkingCode}</Heading>
                  <Text textAlign={'right'}>Spot Code</Text>
                </Stack>
              </Flex>
              <Flex justify={'space-between'}>
                <Stack>
                  <Heading fontSize={'2xl'}>{history.floorId?.mallId?.name}</Heading>
                  <Text>Check-In Place</Text>
                </Stack>
                <Stack>
                  <Heading fontSize={'2xl'} textAlign={'right'}>{history.floorId?.created_at}</Heading>
                  <Text textAlign={'right'}>Check-In Time</Text>
                </Stack>
              </Flex>
              <Divider />
              <Flex justify={'space-between'} align={'center'}>
                <Heading fontSize={'md'}>PARKING TICKET</Heading>
                {history.floorId?.isBooked === true && (
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