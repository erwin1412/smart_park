import { Layout } from "../layout/Layout";
import TicketCard from "../components/TicketCard";
import { Stack } from "@chakra-ui/react";

export default function HistoryPage() {
  return (
    <Layout>
      <Stack
      spacing={10}
      mx={'auto'}
      p={10}
      >
        <TicketCard />
      </Stack>
    </Layout>
  )
}