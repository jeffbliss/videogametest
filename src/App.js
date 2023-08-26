import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { data } from './configuration/data';

function App() {
  return (
    <Grid container spacing={3}>
      {data.matthewsGameList.map((item) => (
        <Grid xs={12} item key={item} pl={70} pr={70} pt={5}>
          <Card sx={{ minWidth: 275, backgroundColor: 'lightgrey' }}>
            <CardContent>
              <Typography variant="h5" component="div">
                {item.name}
              </Typography>
              <br></br>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                <b>Release Date: </b>{item.releaseDate}
              </Typography>
              <Typography variant="body2">
                <b>Thoughts:</b> {item.thoughts}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default App;
