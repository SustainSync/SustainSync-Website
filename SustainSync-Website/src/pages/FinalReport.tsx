import { Box, Container, Typography, Button, Card, CardContent, Stack } from '@mui/material';
import ArticleIcon from '@mui/icons-material/Article';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import HubIcon from '@mui/icons-material/Hub';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import StarIcon from '@mui/icons-material/Star';

const FinalReport = () => {
  const pdfPath = '/SustainSync-Website/assets/INDY-2-SustainSync-FinalReport.pdf';

  const reportHighlights = [
    {
      title: 'Project Overview',
      description: 'Introduction to SustainSync, its mission, and the problems we aimed to solve.',
      icon: RocketLaunchIcon,
      iconBg: '#EAF7E3',
    },
    {
      title: 'Technical Architecture',
      description: 'Deep dive into our tech stack, system design, and implementation decisions.',
      icon: HubIcon,
      iconBg: '#E8F2FF',
    },
    {
      title: 'Challenges & Lessons Learned',
      description: 'Key obstacles and what they taught us about real-world software engineering.',
      icon: TipsAndUpdatesIcon,
      iconBg: '#FFF4E8',
    },
  ];

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
          <ArticleIcon sx={{ fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' }, color: '#8BC53F' }} />
          Final Report
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
          SustainSync Capstone Project Documentation
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
          Our comprehensive final report details the development journey, technical architecture, 
          implementation decisions, and outcomes of the SustainSync sustainability dashboard project.
        </Typography>
      </Box>

      {/* Action Buttons */}
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: { xs: 1.5, sm: 2 }, mb: { xs: 4, md: 6 }, flexWrap: 'wrap', px: 1 }}>
        <Button
          variant="contained"
          size="large"
          startIcon={<CloudDownloadIcon />}
          component="a"
          href={pdfPath}
          download="SustainSync-Final-Report.pdf"
          sx={{
            bgcolor: '#8BC53F',
            color: '#FFFFFF',
            px: { xs: 2.5, sm: 4 },
            py: { xs: 1.2, sm: 1.5 },
            fontSize: { xs: '0.9rem', sm: '1.1rem' },
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
            px: { xs: 2.5, sm: 4 },
            py: { xs: 1.2, sm: 1.5 },
            fontSize: { xs: '0.9rem', sm: '1.1rem' },
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
            height: { xs: '50vh', sm: '65vh', md: '80vh' },
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
      <Box sx={{ mt: { xs: 5, md: 8 } }}>
        <Typography 
          variant="h4" 
          sx={{ 
            mb: { xs: 3, md: 4 },
            fontWeight: 700,
            color: '#2A4B36',
            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.125rem' },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 1,
          }}
        >
          <StarIcon sx={{ fontSize: { xs: 24, md: 28 }, color: '#8BC53F' }} />
          Report Highlights
        </Typography>
        <Stack 
          direction={{ xs: 'column', md: 'row' }} 
          spacing={{ xs: 2, md: 3 }}
          justifyContent="center"
        >
          {reportHighlights.map((item, index) => (
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
              <CardContent sx={{ p: { xs: 2.5, sm: 3 }, textAlign: 'center' }}>
                <Box
                  sx={{
                    width: 56,
                    height: 56,
                    borderRadius: '50%',
                    bgcolor: item.iconBg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 2,
                  }}
                >
                  <item.icon sx={{ fontSize: 28, color: '#2A4B36' }} />
                </Box>
                <Typography 
                  variant="h6" 
                  gutterBottom 
                  sx={{ fontWeight: 600, color: '#2A4B36', fontSize: { xs: '1rem', sm: '1.25rem' } }}
                >
                  {item.title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#5a7460', fontSize: { xs: '0.85rem', sm: '0.875rem' } }}>
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
