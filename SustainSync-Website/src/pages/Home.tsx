import { Box, Container, Typography, Paper, Grid, Card, CardContent, Chip, Stack } from '@mui/material';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';

const Home = () => {
  return (
    <Container maxWidth="xl" sx={{ py: { xs: 4, sm: 6, md: 8 }, px: { xs: 2, sm: 3, md: 4 } }}>
      {/* Hero Section */}
      <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
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
          Welcome to SustainSync
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
          Sustainable Solutions for a Better Tomorrow
        </Typography>
      </Box>

      {/* Videos Section */}
      <Box sx={{ mb: { xs: 6, md: 8 } }}>
        <Typography 
          variant="h4" 
          gutterBottom 
          sx={{ 
            mb: 4,
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
                  src="https://www.youtube.com/embed/YOUR_PRESENTATION_VIDEO_ID"
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
      <Box sx={{ mb: { xs: 6, md: 8 } }}>
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
            mb: 3,
            fontWeight: 700,
            fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
            color: '#2A4B36',
          }}
        >
          Technology Stack
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
                  <Chip label="TypeScript" sx={{ bgcolor: '#CDE3B8', color: '#2A4B36', fontWeight: 600 }} />
                  <Chip label="Material-UI" sx={{ bgcolor: '#CDE3B8', color: '#2A4B36', fontWeight: 600 }} />
                  <Chip label="Vite" sx={{ bgcolor: '#CDE3B8', color: '#2A4B36', fontWeight: 600 }} />
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
                  <Chip label="Node.js" sx={{ bgcolor: '#9FBF84', color: '#2A4B36', fontWeight: 600 }} />
                  <Chip label="Express" sx={{ bgcolor: '#9FBF84', color: '#2A4B36', fontWeight: 600 }} />
                  <Chip label="MongoDB" sx={{ bgcolor: '#9FBF84', color: '#2A4B36', fontWeight: 600 }} />
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
                  <Chip label="GitHub Pages" sx={{ bgcolor: '#8BC53F', color: '#FFFFFF', fontWeight: 600 }} />
                  <Chip label="ESLint" sx={{ bgcolor: '#8BC53F', color: '#FFFFFF', fontWeight: 600 }} />
                  <Chip label="CI/CD" sx={{ bgcolor: '#8BC53F', color: '#FFFFFF', fontWeight: 600 }} />
                </Stack>
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 3 }}>
            <Card elevation={2} sx={{ height: '100%', borderRadius: 3, border: '1px solid #CDE3B8' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom fontWeight="bold" sx={{ color: '#2A4B36' }}>
                  Additional Technologies
                </Typography>
                <Stack direction="row" flexWrap="wrap" gap={1}>
                  <Chip label="Docker" sx={{ bgcolor: '#CDE3B8', color: '#2A4B36', fontWeight: 600 }} />
                  <Chip label="AWS" sx={{ bgcolor: '#CDE3B8', color: '#2A4B36', fontWeight: 600 }} />
                  <Chip label="JWT Auth" sx={{ bgcolor: '#CDE3B8', color: '#2A4B36', fontWeight: 600 }} />
                  <Chip label="WebSockets" sx={{ bgcolor: '#CDE3B8', color: '#2A4B36', fontWeight: 600 }} />
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
