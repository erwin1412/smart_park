import { Grid } from "@chakra-ui/react";
import { Layout } from "../layout/Layout";
import MallList from "../components/MallList";

export default function HomePage() {
  return (
    <Layout>
      <Grid
        templateColumns={'repeat(2, 1fr)'}
        gap={10}
        w={'fit-content'}
        mx={'auto'}
        p={10}
      >
        <MallList />
      </Grid>
    </Layout>
  )
}