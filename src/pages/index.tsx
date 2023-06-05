import { FC } from "react";
import { Grid, Card, CardHeader } from "@mui/material";
import { Layout } from "@/components/layouts";
import { EntryList } from "@/components/ui";
import { EntryStatus } from "@/interfaces";

interface StatusDetails {
  statusDetails: { name: string; type: EntryStatus }[];
}

const statusDetails: StatusDetails["statusDetails"] = [
  { name: "Pending", type: "pending" },
  { name: "In Progress", type: "in-progress" },
  { name: "Completed", type: "finished" },
];

const Home: FC = () => {
  return (
    <Layout title="Home - OpenJira">
      <Grid container spacing={2}>
        {statusDetails.map((statusData, index) => (
          <Grid key={index} item xs={12} sm={4} lg={3}>
            <Card sx={{ height: "calc(100vh - 100px)" }}>
              <CardHeader title={statusData.name} />
              <EntryList status={statusData.type} />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
};

export default Home;
