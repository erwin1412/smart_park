import { Stack } from '@chakra-ui/react'
import { DispatcherLayout } from '../layout/DispatcherLayout'
import TicketCardInbound from '../components/TicketCardInbound'

export default function DispatcherHistoryPage() {
  return (
    <DispatcherLayout>
      <Stack
      spacing={10}
      mx={'auto'}
      p={10}
      >
        <TicketCardInbound />
      </Stack>
    </DispatcherLayout>
  )
}