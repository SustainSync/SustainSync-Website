import { Box, Container, Typography, Button, Card, CardContent, Stack } from '@mui/material';
import DescriptionIcon from '@mui/icons-material/Description';
import DownloadIcon from '@mui/icons-material/Download';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const FinalReport = () => {
  const pdfPath = '/SustainSync-Website/assets/INDY-2-SustainSync-FinalReport.pdf';

  return (
    <Container maxWidth="xl" sx={{ py: { xs: 4, sm: 6, md: 8 }, px: { xs: 2, sm: 3, md: 4 } }}>
      {/* Header Section */}
      <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
          <DescriptionIcon sx={{ fontSize: 48, color: '#8BC53F' }} />
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
          Final Report
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
          SustainSync Capstone Project Documentation
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
          Our comprehensive final report details the development journey, technical architecture, 
          implementation decisions, and outcomes of the SustainSync sustainability dashboard project.
        </Typography>
      </Box>

      {/* Action Buttons */}
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 6, flexWrap: 'wrap' }}>
        <Button
          variant="contained"
          size="large"
          startIcon={<DownloadIcon />}
          component="a"
          href={pdfPath}
          download="SustainSync-Final-Report.pdf"
          sx={{
            bgcolor: '#8BC53F',
            color: '#FFFFFF',
            px: 4,
            py: 1.5,
            fontSize: '1.1rem',
            '&:hover': {
              bgcolor: '#6a9a2f',
            },
          }}
        >
          Download PDF
        </Button>
        <Button
          variant="outlined"
          size="large"
          startIcon={<OpenInNewIcon />}
          component="a"
          href={pdfPath}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            borderColor: '#2A4B36',
            color: '#2A4B36',
            px: 4,
            py: 1.5,
            fontSize: '1.1rem',
            '&:hover': {
              borderColor: '#8BC53F',
              bgcolor: 'rgba(139, 197, 63, 0.1)',
            },
          }}
        >
          Open in New Tab
        </Button>
      </Box>

      {/* PDF Viewer */}
      <Card 
        elevation={4}
        sx={{ 
          maxWidth: 1200, 
          mx: 'auto',
          borderRadius: 3,
          border: '2px solid #CDE3B8',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: { xs: '60vh', sm: '70vh', md: '80vh' },
            bgcolor: '#f8faf7',
          }}
        >
          <iframe
            src={pdfPath}
            title="SustainSync Final Report"
            width="100%"
            height="100%"
            style={{ border: 'none' }}
          />
        </Box>
      </Card>

      {/* Report Summary Section */}
      <Box sx={{ mt: { xs: 6, md: 8 } }}>
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
          Report Highlights
        </Typography>
        <Stack 
          direction={{ xs: 'column', md: 'row' }} 
          spacing={3} 
          justifyContent="center"
        >
          {[
            {
              title: 'Project Overview',
              description: 'Introduction to SustainSync, its mission, and the problems we aimed to solve.',
            },
            {
              title: 'Technical Architecture',
              description: 'Deep dive into our tech stack, system design, and implementation decisions.',
            },
            {
              title: 'Challenges & Lessons Learned',
              description: 'Key obstacles and what they taught us about real-world software engineering.',
            },
          ].map((item, index) => (
            <Card 
              key={index}
              elevation={2}
              sx={{ 
                flex: 1,
                borderRadius: 3,
                border: '1px solid #CDE3B8',
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 8px 24px rgba(42, 75, 54, 0.15)',
                  borderColor: '#8BC53F',
                }
              }}
            >
              <CardContent sx={{ p: 3, textAlign: 'center' }}>
                <Typography 
                  variant="h6" 
                  gutterBottom 
                  sx={{ fontWeight: 600, color: '#2A4B36' }}
                >
                  {item.title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#5a7460' }}>
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Box>
    </Container>
  );
};

export default FinalReport;
