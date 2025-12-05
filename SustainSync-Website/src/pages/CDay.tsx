import { Box, Container, Typography, Grid, Card, CardMedia } from '@mui/material';
import CelebrationIcon from '@mui/icons-material/Celebration';

const cdayPhotos = [
  {
    img: '/SustainSync-Website/assets/cday/tac.jpg',
    title: 'Team at C-Day',
    objectPosition: 'top',
  },
  {
    img: '/SustainSync-Website/assets/cday/comingsoon.jpg',
    title: 'Presenting our project',
    objectPosition: 'center',
  },
  {
    img: '/SustainSync-Website/assets/cday/wop.png',
    title: 'With our poster',
    objectPosition: 'center',
  },
];

const CDay = () => {
  return (
    <Container maxWidth="xl" sx={{ py: { xs: 4, sm: 6, md: 8 }, px: { xs: 2, sm: 3, md: 4 } }}>
      {/* Header Section */}
      <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
          <CelebrationIcon sx={{ fontSize: 48, color: '#8BC53F' }} />
        </Box>
        <Typography 
          variant="h2" 
          component="h1" 
          gutterBottom 
          sx={{ 
            fontWeight: 800,
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' },
            color: '#2A4B36',
            letterSpacing: '-0.02em',
          }}
        >
          C-Day 2025
        </Typography>
        <Typography 
          variant="h5" 
          sx={{ 
            color: '#5a7460',
            fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem' },
            fontWeight: 500,
            mt: 2,
          }} 
          paragraph
        >
          Our Capstone Project Showcase Experience
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ 
            maxWidth: '900px', 
            mx: 'auto', 
            mt: 3, 
            color: '#2A4B36',
            fontSize: { xs: '0.95rem', sm: '1rem', md: '1.05rem' },
          }}
        >
          We had the honor of presenting SustainSync at KSU's C-Day (Capstone Day), 
          where we showcased our sustainability dashboard to faculty, students, and industry professionals. 
          Here's a look at our poster and some memorable moments from the event!
        </Typography>
      </Box>

      {/* Poster Section */}
      <Box sx={{ mb: { xs: 6, md: 8 } }}>
        <Typography 
          variant="h4" 
          gutterBottom 
          sx={{ 
            mb: 4,
            fontWeight: 700,
            textAlign: 'center',
            color: '#2A4B36',
          }}
        >
          Our Project Poster
        </Typography>
        <Card 
          elevation={4}
          sx={{ 
            maxWidth: 1000, 
            mx: 'auto',
            borderRadius: 3,
            border: '2px solid #CDE3B8',
            overflow: 'hidden',
            transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.01)',
              boxShadow: '0 12px 32px rgba(42, 75, 54, 0.2)',
            }
          }}
        >
          <CardMedia
            component="img"
            image="/SustainSync-Website/assets/cday/sustainsync-cday2025Final.png"
            alt="SustainSync C-Day Poster"
            sx={{
              width: '100%',
              height: 'auto',
              objectFit: 'contain',
            }}
          />
        </Card>
      </Box>

      {/* Photo Gallery Section */}
      <Box sx={{ mb: { xs: 4, md: 6 } }}>
        <Typography 
          variant="h4" 
          gutterBottom 
          sx={{ 
            mb: 4,
            fontWeight: 700,
            textAlign: 'center',
            color: '#2A4B36',
          }}
        >
          Event Photos
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {cdayPhotos.map((photo, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Card 
                elevation={3}
                sx={{ 
                  borderRadius: 3,
                  border: '1px solid #CDE3B8',
                  overflow: 'hidden',
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 8px 24px rgba(42, 75, 54, 0.15)',
                    borderColor: '#8BC53F',
                  }
                }}
              >
                <CardMedia
                  component="img"
                  height="280"
                  image={photo.img}
                  alt={photo.title}
                  sx={{
                    objectFit: 'cover',
                    objectPosition: photo.objectPosition || 'center',
                  }}
                />
                <Box sx={{ p: 2, textAlign: 'center', bgcolor: '#f8faf7' }}>
                  <Typography variant="body1" sx={{ color: '#2A4B36', fontWeight: 500 }}>
                    {photo.title}
                  </Typography>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
        
        {/* Placeholder message if no photos yet */}
        {cdayPhotos.length === 0 && (
          <Box 
            sx={{ 
              textAlign: 'center', 
              py: 8, 
              px: 4,
              bgcolor: '#f8faf7',
              borderRadius: 3,
              border: '2px dashed #CDE3B8',
            }}
          >
            <Typography variant="h6" sx={{ color: '#5a7460' }}>
              Photos coming soon!
            </Typography>
            <Typography variant="body2" sx={{ color: '#5a7460', mt: 1 }}>
              Check back after C-Day for pictures from the event.
            </Typography>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default CDay;
