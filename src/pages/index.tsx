import { FC } from "react";
import { Grid, Card, CardHeader, CardContent } from "@mui/material";
import { Layout } from "@/components/layouts";

const Home: FC = () => {
  return (
    <Layout title="Home - OpenJira">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="Pending" />
            <CardContent></CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="In Progress" />
            <CardContent></CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="Completed" />
            <CardContent></CardContent>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Home;
