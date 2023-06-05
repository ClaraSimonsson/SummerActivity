import { Box } from '@mui/material';
import KmCard from '../components/KmCard';
import { Grid } from "@mui/material";

const Home = () => {
    return (
      <Box sx={{ m: 10 }}>
        <Grid container spacing={2} sx={{
          '--Grid-borderWidth': '2px',
          borderTop: 'var(--Grid-borderWidth) solid',
          borderLeft: 'var(--Grid-borderWidth) solid',
          borderColor: 'divider',
          '& > div': {
            borderRight: 'var(--Grid-borderWidth) solid',
            borderBottom: 'var(--Grid-borderWidth) solid',
            borderColor: 'divider',
          },
        }}
        >
          {[...Array(12)].map((_, index) => (
            <KmCard index={index} />
          ))}
        </Grid>
      </Box>
    );
};

export default Home;