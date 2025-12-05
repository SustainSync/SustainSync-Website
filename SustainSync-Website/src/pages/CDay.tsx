import { Box, Container, Typography, Grid, Card, CardMedia } from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CollectionsIcon from '@mui/icons-material/Collections';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';

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
    <Container maxWidth="xl" sx={{ py: { xs: 3, sm: 6, md: 8 }, px: { xs: 2, sm: 3, md: 4 } }}>
      {/* Header Section */}
      <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 8 } }}>
        <Typography 
          variant="h2" 
          component="h1" 
          gutterBottom 
          sx={{ 
            fontWeight: 800,
            fontSize: { xs: '1.75rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' },
            color: '#2A4B36',
            letterSpacing: '-0.02em',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: { xs: 1, md: 1.5 },
          }}
        >
          <AutoAwesomeIcon sx={{ fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' }, color: '#8BC53F' }} />
          C-Day 2025
        </Typography>
        <Typography 
          variant="h5" 
          sx={{ 
            color: '#5a7460',
            fontSize: { xs: '1rem', sm: '1.3rem', md: '1.5rem' },
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
            fontSize: { xs: '0.9rem', sm: '1rem', md: '1.05rem' },
            px: { xs: 1, sm: 0 },
          }}
        >
          We had the honor of presenting SustainSync at KSU's C-Day (Capstone Day), 
          where we showcased our sustainability dashboard to faculty, students, and industry professionals. 
          Here's a look at our poster and some memorable moments from the event!
        </Typography>
      </Box>

      {/* Poster Section */}
      <Box sx={{ mb: { xs: 5, md: 8 } }}>
        <Typography 
          variant="h4" 
          sx={{ 
            fontWeight: 700,
            color: '#2A4B36',
            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.125rem' },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 1,
            mb: { xs: 3, md: 4 },
          }}
        >
          <ViewQuiltIcon sx={{ fontSize: { xs: 24, md: 28 }, color: '#8BC53F' }} />
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
              transform: { sm: 'scale(1.01)' },
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
          sx={{ 
            fontWeight: 700,
            color: '#2A4B36',
            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.125rem' },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 1,
            mb: { xs: 3, md: 4 },
          }}
        >
          <CollectionsIcon sx={{ fontSize: { xs: 24, md: 28 }, color: '#8BC53F' }} />
          Event Photos
        </Typography>
        <Grid container spacing={{ xs: 2, sm: 3 }} justifyContent="center">
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
                    transform: { sm: 'translateY(-8px)' },
                    boxShadow: '0 8px 24px rgba(42, 75, 54, 0.15)',
                    borderColor: '#8BC53F',
                  }
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    height: { xs: 220, sm: 260, md: 280 },
                    objectFit: 'cover',
                    objectPosition: photo.objectPosition || 'center',
                  }}
                  image={photo.img}
                  alt={photo.title}
                />
                <Box sx={{ p: { xs: 1.5, sm: 2 }, textAlign: 'center', bgcolor: '#f8faf7' }}>
                  <Typography variant="body1" sx={{ color: '#2A4B36', fontWeight: 500, fontSize: { xs: '0.9rem', sm: '1rem' } }}>
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
              py: { xs: 6, md: 8 }, 
              px: { xs: 3, md: 4 },
              bgcolor: '#f8faf7',
              borderRadius: 3,
              border: '2px dashed #CDE3B8',
            }}
          >
            <CollectionsIcon sx={{ fontSize: 48, color: '#CDE3B8', mb: 2 }} />
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
