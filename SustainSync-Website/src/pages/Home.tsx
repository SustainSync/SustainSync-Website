import { Box, Container, Typography, Paper, Grid, Card, CardContent, Chip, Stack } from '@mui/material';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';

const Home = () => {
  return (
    <Container maxWidth="xl" sx={{ py: { xs: 2, sm: 3, md: 4 }, px: { xs: 2, sm: 3, md: 4 } }}>
      {/* Hero Section inside container */}
      <Box
        sx={{
          position: 'relative',
          minHeight: { xs: '30vh', md: '40vh', lg: '45vh' },
          display: 'flex',
          alignItems: 'center',
          backgroundImage: "url('/SustainSync-Website/assets/homepageBG.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          borderRadius: 3,
          overflow: 'hidden',
          mb: { xs: 4, md: 6 },
        }}
      >
        {/* Overlay for contrast */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            bgcolor: 'rgba(42, 75, 54, 0.35)',
          }}
        />
        <Box sx={{ position: 'relative', zIndex: 1, textAlign: 'center', width: '100%', py: { xs: 6, md: 10 }, px: { xs: 2, sm: 3, md: 4 } }}>
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 800,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' },
              color: '#FFFFFF',
              letterSpacing: '-0.02em',
              textShadow: '0 2px 8px rgba(0,0,0,0.25)'
            }}
          >
            Welcome to SustainSync
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: 'rgba(255,255,255,0.95)',
              fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem' },
              fontWeight: 500,
              mt: 2,
              textShadow: '0 1px 6px rgba(0,0,0,0.2)'
            }}
            paragraph
          >
            A Sustainable Dashboard for a Better Tomorrow!
          </Typography>
        </Box>
      </Box>

      {/* Videos Section */}
      <Box sx={{ mb: { xs: 4, md: 6 } }}>
        <Typography 
          variant="h4" 
          gutterBottom 
          sx={{ 
            mb: 3,
            fontWeight: 700,
            fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
            color: '#2A4B36',
          }}
        >
          Project Videos
        </Typography>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper elevation={3} sx={{ p: 3, height: '100%', borderRadius: 3, border: '1px solid #CDE3B8' }}>
              <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
                <VideoLibraryIcon sx={{ color: '#8BC53F' }} />
                <Typography variant="h6" fontWeight="bold" sx={{ color: '#2A4B36' }}>
                  Presentation Video
                </Typography>
              </Stack>
              <Box
                sx={{
                  position: 'relative',
                  paddingBottom: '56.25%', // 16:9 aspect ratio
                  height: 0,
                  overflow: 'hidden',
                  backgroundColor: '#f5f5f5',
                  borderRadius: 1,
                }}
              >
                <iframe
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    border: 0,
                  }}
                  src="https://www.youtube.com/embed/8UilZJ8wps4"
                  title="SustainSync Presentation"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </Box>
              <Typography variant="body2" sx={{ mt: 2, color: '#5a7460' }}>
                Watch our comprehensive project presentation showcasing the vision and impact of SustainSync.
              </Typography>
            </Paper>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper elevation={3} sx={{ p: 3, height: '100%', borderRadius: 3, border: '1px solid #CDE3B8' }}>
              <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
                <VideoLibraryIcon sx={{ color: '#8BC53F' }} />
                <Typography variant="h6" fontWeight="bold" sx={{ color: '#2A4B36' }}>
                  Demo Video
                </Typography>
              </Stack>
              <Box
                sx={{
                  position: 'relative',
                  paddingBottom: '56.25%', // 16:9 aspect ratio
                  height: 0,
                  overflow: 'hidden',
                  backgroundColor: '#f5f5f5',
                  borderRadius: 1,
                }}
              >
                <iframe
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    border: 0,
                  }}
                  src="https://www.youtube.com/embed/YOUR_DEMO_VIDEO_ID"
                  title="SustainSync Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </Box>
              <Typography variant="body2" sx={{ mt: 2, color: '#5a7460' }}>
                See SustainSync in action with our detailed demonstration of key features and functionality.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      {/* Project Overview Section */}
      <Box sx={{ mb: { xs: 4, md: 6 } }}>
        <Typography 
          variant="h4" 
          gutterBottom 
          sx={{ 
            mb: 2,
            fontWeight: 700,
            fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
            color: '#2A4B36',
          }}
        >
          Project Overview
        </Typography>
        <Paper elevation={2} sx={{ p: { xs: 3, sm: 4 }, borderRadius: 3, bgcolor: '#f8faf7', border: '1px solid #CDE3B8' }}>
          <Typography variant="body1" paragraph sx={{ fontSize: { xs: '1rem', md: '1.1rem' }, lineHeight: 1.8, color: '#2A4B36' }}>
            SustainSync is an innovative sustainability management platform designed to help organizations 
            track, analyze, and optimize their environmental impact. Our solution empowers businesses to 
            make data-driven decisions that promote sustainable practices while maintaining operational efficiency.
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: { xs: '1rem', md: '1.1rem' }, lineHeight: 1.8, color: '#2A4B36' }}>
            Through real-time monitoring, intelligent analytics, and actionable insights, SustainSync bridges 
            the gap between corporate sustainability goals and practical implementation. The platform integrates 
            seamlessly with existing workflows, making it easier than ever for organizations to embrace 
            eco-friendly practices and contribute to a greener future.
          </Typography>
          <Typography variant="body1" sx={{ fontSize: { xs: '1rem', md: '1.1rem' }, lineHeight: 1.8, color: '#2A4B36' }}>
            As a senior computing project, SustainSync demonstrates the power of modern technology in addressing 
            critical environmental challenges. By combining cutting-edge software engineering with sustainability 
            science, we've created a tool that not only meets today's needs but also scales for tomorrow's challenges.
          </Typography>
        </Paper>
      </Box>

      {/* Technology Stack Section */}
      <Box>
        <Typography 
          variant="h4" 
          gutterBottom 
          sx={{ 
            mb: 2,
            fontWeight: 700,
            fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
            color: '#2A4B36',
          }}
        >
          Technology Stack & Methodologies
        </Typography>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6, lg: 3 }}>
            <Card elevation={2} sx={{ height: '100%', borderRadius: 3, border: '1px solid #CDE3B8' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom fontWeight="bold" sx={{ color: '#2A4B36' }}>
                  Frontend
                </Typography>
                <Stack direction="row" flexWrap="wrap" gap={1}>
                  <Chip label="React" sx={{ bgcolor: '#CDE3B8', color: '#2A4B36', fontWeight: 600 }} />
                  <Chip label="Canva" sx={{ bgcolor: '#CDE3B8', color: '#2A4B36', fontWeight: 600 }} />
                  <Chip label="Material-UI" sx={{ bgcolor: '#CDE3B8', color: '#2A4B36', fontWeight: 600 }} />
                </Stack>
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 3 }}>
            <Card elevation={2} sx={{ height: '100%', borderRadius: 3, border: '1px solid #CDE3B8' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom fontWeight="bold" sx={{ color: '#2A4B36' }}>
                  Backend
                </Typography>
                <Stack direction="row" flexWrap="wrap" gap={1}>
                  <Chip label="Django" sx={{ bgcolor: '#9FBF84', color: '#2A4B36', fontWeight: 600 }} />
                  <Chip label="PostgreSQL" sx={{ bgcolor: '#9FBF84', color: '#2A4B36', fontWeight: 600 }} />
                  <Chip label="Ollama" sx={{ bgcolor: '#9FBF84', color: '#2A4B36', fontWeight: 600 }} />
                  <Chip label="REST API" sx={{ bgcolor: '#9FBF84', color: '#2A4B36', fontWeight: 600 }} />
                </Stack>
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 3 }}>
            <Card elevation={2} sx={{ height: '100%', borderRadius: 3, border: '1px solid #CDE3B8' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom fontWeight="bold" sx={{ color: '#2A4B36' }}>
                  DevOps & Tools
                </Typography>
                <Stack direction="row" flexWrap="wrap" gap={1}>
                  <Chip label="Git/GitHub" sx={{ bgcolor: '#8BC53F', color: '#FFFFFF', fontWeight: 600 }} />
                  <Chip label="GitHub Copilot" sx={{ bgcolor: '#8BC53F', color: '#FFFFFF', fontWeight: 600 }} />
                  <Chip label="Github Actions" sx={{ bgcolor: '#8BC53F', color: '#FFFFFF', fontWeight: 600 }} />
                  <Chip label="Docker" sx={{ bgcolor: '#8BC53F', color: '#FFFFFF', fontWeight: 600 }} />
                </Stack>
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 3 }}>
            <Card elevation={2} sx={{ height: '100%', borderRadius: 3, border: '1px solid #CDE3B8' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom fontWeight="bold" sx={{ color: '#2A4B36' }}>
                  Methodologies
                </Typography>
                <Stack direction="row" flexWrap="wrap" gap={1}>
                  <Chip label="Agile" sx={{ bgcolor: '#CDE3B8', color: '#2A4B36', fontWeight: 600 }} />
                  <Chip label="Scrum" sx={{ bgcolor: '#CDE3B8', color: '#2A4B36', fontWeight: 600 }} />
                  <Chip label="Microservice" sx={{ bgcolor: '#CDE3B8', color: '#2A4B36', fontWeight: 600 }} />
                  <Chip label="Retreival Augmented Generation" sx={{ bgcolor: '#CDE3B8', color: '#2A4B36', fontWeight: 600 }} />
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Home;
