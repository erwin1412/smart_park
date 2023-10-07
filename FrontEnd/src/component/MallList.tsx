import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import useGetMallList from "../hooks/useGetMallList"
import { useEffect, useState } from "react"
import { IMall } from "../interface/IMall"

export default function MallList() {
  const navigate = useNavigate()

  const { mallList, getData } = useGetMallList()
  console.log("list", mallList)

  // const [malls, setMalls] = useState<IMall[]>([]);
  // const malls = Array.isArray(mallList) ? mallList : []
  const malls = Array.isArray(mallList) && mallList.length > 0 ? mallList : [];
  console.log("mall", malls)

  
  useEffect(() => {
    getData(); // Fetch mall data
  }, [mallList]);
  return (
    <>
      {malls?.map((mall: IMall) => (
        <Card w={"sm"} key={mall.id}>
          <CardBody>
            <Image
              borderRadius={"md"}
              src={typeof mall.image === "string" ? mall.image : ""}
              w={"full"}
              h={"15em"}
              objectFit={"cover"}
              />
            <Stack mt={6}>
              <Heading size={"md"}>
                {mall.name}
              </Heading>
              <Text>{mall.district}</Text>
              <Text>{mall.address}</Text>
            </Stack>
          </CardBody>
          <Divider borderColor={"gray.200"} />
          <CardFooter>
            <Button
              w={"full"}
              onClick={() => navigate("/reservation")}
              bgColor={"#ED7D3A"}
              textColor={"white"}
              _hover={{ bgColor: "gray.200", textColor: "black" }}
            >
              View Parking Spot
            </Button>
          </CardFooter>
        </Card>
      ))}
    </>
  )
}
