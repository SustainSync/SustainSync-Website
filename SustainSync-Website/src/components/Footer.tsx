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
              © {currentYear} SustainSync. Kennesaw State University College of Computing and Software Engineering. Indy-2 CS4850 Fall Semester 2025.
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
