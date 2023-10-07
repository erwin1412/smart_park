import { Button, Image, Stack } from "@chakra-ui/react";
import HomeIcon from "../assets/icons/icons8-warehouse-96.png"
import HomeIconCol from "../assets/icons/icons8-warehouse-96-color.png"
import HistoryIcon from "../assets/icons/icons8-order-history-96.png"
import HistoryIconCol from "../assets/icons/icons8-order-history-96-color.png"
import { useLocation, useNavigate } from "react-router-dom";

export function Navigation() {
  const navigate = useNavigate()
  const location = useLocation()
  return (
    <Stack p={5}>
      <Button
        variant={'ghost'}
        justifyContent={'left'}
        size={'lg'}
        leftIcon={
          location.pathname === '/'
            ?
            <Image src={HomeIconCol} w={8} />
            :
            <Image src={HomeIcon} w={8} />
        }
        onClick={() => navigate('/')}
      >
        Home
      </Button>
      <Button
        variant={'ghost'}
        justifyContent={'left'}
        size={'lg'}
        leftIcon={
          location.pathname === '/history'
            ?
            <Image src={HistoryIconCol} w={8} />
            :
            <Image src={HistoryIcon} w={8} />
        }
        onClick={() => navigate('/history')}
      >
        History
      </Button>
    </Stack>
  )
}