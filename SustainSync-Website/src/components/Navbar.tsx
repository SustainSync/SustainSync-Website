import { AppBar, Toolbar, Button, Box, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <AppBar position="sticky" sx={{ bgcolor: '#2A4B36', boxShadow: 2 }}>
      <Toolbar sx={{ py: 1.5, minHeight: { xs: 80, sm: 90 } }}>
          {/* Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <Box
              component={Link}
              to="/"
              sx={{
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
              }}
            >
              <Box
                component="img"
                src="/SustainSync-Website/brand-logo.svg"
                alt="SustainSync Logo"
                sx={{
                  height: { xs: 72, sm: 84 },
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}
              />
            </Box>
          </Box>

          {/* Navigation Links */}
          <Box sx={{ display: 'flex', gap: { xs: 1, sm: 2 }, alignItems: 'center' }}>
            <Button
              component={Link}
              to="/"
              sx={{
                color: '#FFFFFF',
                fontSize: { xs: '0.9rem', sm: '1rem' },
                fontWeight: location.pathname === '/' ? 'bold' : 'normal',
                borderBottom: location.pathname === '/' ? 2 : 0,
                borderRadius: 0,
                borderColor: '#8BC53F',
                px: { xs: 1.5, sm: 2 },
                '&:hover': {
                  backgroundColor: 'rgba(139, 197, 63, 0.1)',
                  color: '#8BC53F',
                },
              }}
            >
              Home
            </Button>
            <Button
              component={Link}
              to="/about"
              sx={{
                color: '#FFFFFF',
                fontSize: { xs: '0.9rem', sm: '1rem' },
                fontWeight: location.pathname === '/about' ? 'bold' : 'normal',
                borderBottom: location.pathname === '/about' ? 2 : 0,
                borderRadius: 0,
                borderColor: '#8BC53F',
                px: { xs: 1.5, sm: 2 },
                '&:hover': {
                  backgroundColor: 'rgba(139, 197, 63, 0.1)',
                  color: '#8BC53F',
                },
              }}
            >
              About
            </Button>
            <IconButton
              component="a"
              href="https://github.com/SustainSync"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub repository"
              sx={{
                color: '#FFFFFF',
                '&:hover': {
                  backgroundColor: 'rgba(139, 197, 63, 0.2)',
                  color: '#8BC53F',
                },
              }}
            >
              <GitHubIcon sx={{ fontSize: { xs: 24, sm: 28 } }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
  );
};

export default Navbar;
