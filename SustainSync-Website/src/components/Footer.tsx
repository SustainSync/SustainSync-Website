import { Box, Container, Typography, Link as MuiLink, Stack, Divider } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#2A4B36',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={3}>
          {/* Logo and Title */}
          <Box sx={{ textAlign: 'center' }}>
            <Box
              component="img"
              src="/SustainSync-Website/brand-logo.svg"
              alt="SustainSync Logo"
              sx={{
                height: 50,
                mb: 1,
              }}
            />
            <Typography variant="h6" fontWeight="bold" sx={{ color: '#FFFFFF' }}>
              SustainSync
            </Typography>
            <Typography variant="body2" sx={{ mt: 1, color: '#E0E0E0' }}>
              Building a sustainable future through technology
            </Typography>
          </Box>

          <Divider sx={{ bgcolor: 'rgba(255, 255, 255, 0.2)' }} />

          {/* Links */}
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <MuiLink
              href="https://github.com/SustainSync"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 0.5,
                color: '#FFFFFF',
                textDecoration: 'none',
                '&:hover': {
                  color: '#8BC53F',
                },
              }}
            >
              <GitHubIcon fontSize="small" />
              <Typography variant="body2">GitHub Repository</Typography>
            </MuiLink>
          </Stack>

          {/* Copyright */}
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="body2" sx={{ color: '#E0E0E0' }}>
              © {currentYear} SustainSync. Senior Computing Project.
            </Typography>
            <Typography
              variant="body2"
              sx={{ mt: 0.5, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0.5, color: '#E0E0E0' }}
            >
              Made with <FavoriteIcon sx={{ fontSize: 16, color: '#8BC53F' }} /> by the SustainSync Team
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
