import { Box, Button, Flex, FormControl, FormLabel, Grid, Heading, Image, Input, Stack, Text } from "@chakra-ui/react";
import { Layout } from "../layout/Layout";
import dummyFloorPlan from "../utils/dummyFloorPlan.json"
import floorPlan from "../assets/mkg-floor-plan.svg"
import { useState } from "react";
import { IDummy } from "../interface/IDummy";
// import { useDummyForm } from "../hooks/useDummyForm";
// import { useNavigate } from "react-router-dom";

export default function ReservationPage() {
  // const randomizePercentage = 0.4
  // const randomizeIsBooked = Math.ceil(dummyFloorPlan.length * randomizePercentage)

  // for (let i = 0; i < randomizeIsBooked; i++) {
  //   const randomIndex = Math.floor(Math.random() * dummyFloorPlan.length)
  //   dummyFloorPlan[randomIndex].isBooked = true
  // }
  const [selectedSpot, setSelectedSpot] =
    useState<string | number | readonly string[] | undefined>(undefined)

  const handleSpotSelection = (spotCode: string) => {
    setSelectedSpot(spotCode)
  }


  const handleDummySubmit = () => {
    const plateNumberInput = document.getElementById('plateNumberInput') as HTMLInputElement | null
    const plateNumber = plateNumberInput ? plateNumberInput.value : ''

    const formData: IDummy = {
      selectedSpot: selectedSpot,
      plateNumber: plateNumber,
      isBooked: false,
      mallName: "Mal Kelapa Gading",
      mallLocation: "Jakarta Utara",
      createdAt: new Date().toISOString(),
    }

    const parkingData = JSON.parse(localStorage.getItem('Parking Spot Data') || '[]');

    formData.isBooked = true

    parkingData.push(formData)

    localStorage.setItem('Parking Spot Data', JSON.stringify(parkingData))

    window.location.href = 'history'
  }

  return (
    <Layout>
      <Stack spacing={10}
        mx={'auto'}
        p={10}
      >
        <Flex justify={'space-between'}>
          <Heading size={'md'}>MKG's Parking Lot</Heading>
          <Text>{dummyFloorPlan.length} Parking Spots | {dummyFloorPlan.filter(parkingSpot => !parkingSpot.isBooked).length} Available</Text>
        </Flex>

        <Flex mx={'auto'} boxSize={'2xs'}>
          <Image src={floorPlan} />
        </Flex>

        <Stack spacing={5}>
          <Flex justify={'space-between'} align={'center'}>
            <Heading size={'md'}>Select Your Spot: {selectedSpot}</Heading>
            <Flex justify={'center'} gap={5}>
              <Flex
                direction={'column'}
                align={'center'}
                gap={2}
              >
                <Box
                  w={37}
                  h={37}
                  bgColor={'#999999'}
                  borderRadius={'full'}
                />
                <Text>Booked</Text>
              </Flex>

              <Flex
                direction={'column'}
                align={'center'}
                gap={2}
              >
                <Box
                  w={37}
                  h={37}
                  bgColor={'#ED7D3A'}
                  borderRadius={'full'}
                />
                <Text>Available</Text>
              </Flex>
            </Flex>
          </Flex>

          <Grid templateColumns={'repeat(10, 8fr)'} gap={5}>
            {dummyFloorPlan.map((parkingSpot) => (
              <Button
                key={parkingSpot.id}
                isDisabled={parkingSpot.isBooked === true}
                onClick={() => handleSpotSelection(parkingSpot.parkingCode)}
                bgColor={
                  parkingSpot.isBooked
                    ? '#363537'
                    : parkingSpot.parkingCode === selectedSpot
                      ? '#B44401'
                      : '#ED7D3A'
                }
                textColor={'white'}
                _hover={{ bgColor: 'gray.200', textColor: 'black' }}
                borderRadius={'sm'}
              >
                {parkingSpot.parkingCode}
              </Button>
            ))}
          </Grid>
        </Stack>

        <Flex gap={5} align={'end'}>
          <FormControl isRequired isReadOnly>
            <FormLabel>Chosen Parking Spot</FormLabel>
            <Input
              variant={'flushed'}
              borderColor={'#ED7D3A'}
              readOnly
              value={selectedSpot}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Current Vehicle's Plate Number</FormLabel>
            <Input
              variant={'flushed'}
              borderColor={'#ED7D3A'}
              placeholder="B 2134 ADC"
              id="plateNumberInput"
            />
          </FormControl>

          <Button
            w={'full'}
            bgColor={'#ED7D3A'}
            textColor={'white'}
            _hover={{ bgColor: 'gray.200', textColor: 'black' }}
            onClick={handleDummySubmit}
          >
            Save My Spot!
          </Button>
        </Flex>
      </Stack>
    </Layout>
  )
}