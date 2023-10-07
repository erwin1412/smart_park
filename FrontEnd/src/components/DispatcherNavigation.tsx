import { Button, Image, Stack } from "@chakra-ui/react";
import HistoryIcon from "../assets/icons/icons8-order-history-96.png"
import HistoryIconCol from "../assets/icons/icons8-order-history-96-color.png"
import { useLocation, useNavigate } from "react-router-dom";
import ReportIcon from "../assets/icons/icons8-add-graph-report-96.png"
import ReportIconCol from "../assets/icons/icons8-add-graph-report-96-color.png"

export function DispatcherNavigation() {
  const navigate = useNavigate()
  const location = useLocation()
  return (
    <Stack p={5}>
      <Button
        variant={'ghost'}
        justifyContent={'left'}
        size={'lg'}
        leftIcon={
          location.pathname === '/dispatcher_history'
            ?
            <Image src={HistoryIconCol} w={8} />
            :
            <Image src={HistoryIcon} w={8} />
        }
        onClick={() => navigate('/dispatcher_history')}
      >
        History
      </Button>

      <Button
        variant={'ghost'}
        justifyContent={'left'}
        size={'lg'}
        leftIcon={
          location.pathname === '/file_a_report'
            ?
            <Image src={ReportIconCol} w={8} />
            :
            <Image src={ReportIcon} w={8} />
        }
        onClick={() => navigate('/file_a_report')}
      >
        Report
      </Button>
    </Stack>
  )
}