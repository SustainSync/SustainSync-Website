import { useState } from 'react';
import { AppBar, Toolbar, Button, Box, IconButton, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import GroupsIcon from '@mui/icons-material/Groups';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ArticleIcon from '@mui/icons-material/Article';
import CloseIcon from '@mui/icons-material/Close';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Home', path: '/', icon: HomeIcon },
  { label: 'About', path: '/about', icon: GroupsIcon },
  { label: 'C-Day', path: '/cday', icon: EmojiEventsIcon },
  { label: 'Final Report', path: '/final-report', icon: ArticleIcon },
];

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ width: 280, bgcolor: '#2A4B36', height: '100%' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
        <Box
          component="img"
          src="/SustainSync-Website/brand-logo.svg"
          alt="SustainSync Logo"
          sx={{ height: 50 }}
        />
        <IconButton onClick={handleDrawerToggle} sx={{ color: '#FFFFFF' }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider sx={{ borderColor: 'rgba(255,255,255,0.2)' }} />
      <List sx={{ pt: 2 }}>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              component={Link}
              to={item.path}
              onClick={handleDrawerToggle}
              sx={{
                py: 2,
                px: 3,
                bgcolor: location.pathname === item.path ? 'rgba(139, 197, 63, 0.2)' : 'transparent',
                borderLeft: location.pathname === item.path ? '4px solid #8BC53F' : '4px solid transparent',
                '&:hover': {
                  bgcolor: 'rgba(139, 197, 63, 0.1)',
                },
              }}
            >
              <ListItemIcon sx={{ color: location.pathname === item.path ? '#8BC53F' : '#FFFFFF', minWidth: 40 }}>
                <item.icon />
              </ListItemIcon>
              <ListItemText 
                primary={item.label} 
                sx={{ 
                  '& .MuiTypography-root': { 
                    color: location.pathname === item.path ? '#8BC53F' : '#FFFFFF',
                    fontWeight: location.pathname === item.path ? 700 : 500,
                  }
                }} 
              />
            </ListItemButton>
          </ListItem>
        ))}
        <Divider sx={{ borderColor: 'rgba(255,255,255,0.2)', my: 2 }} />
        <ListItem disablePadding>
          <ListItemButton
            component="a"
            href="https://github.com/SustainSync/cs4850/tree/main/SustainSync"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              py: 2,
              px: 3,
              '&:hover': {
                bgcolor: 'rgba(139, 197, 63, 0.1)',
              },
            }}
          >
            <ListItemIcon sx={{ color: '#FFFFFF', minWidth: 40 }}>
              <GitHubIcon />
            </ListItemIcon>
            <ListItemText 
              primary="GitHub Repository" 
              sx={{ '& .MuiTypography-root': { color: '#FFFFFF', fontWeight: 500 } }} 
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="sticky" sx={{ bgcolor: '#2A4B36', boxShadow: 2 }}>
        <Toolbar sx={{ py: 1.5, minHeight: { xs: 70, sm: 90 } }}>
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
                  height: { xs: 56, sm: 84 },
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}
              />
            </Box>
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            color="inherit"
            aria-label="open navigation menu"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: 'none' }, color: '#FFFFFF' }}
          >
            <MenuIcon sx={{ fontSize: 28 }} />
          </IconButton>

          {/* Desktop Navigation Links */}
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: { sm: 1, md: 2 }, alignItems: 'center' }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                component={Link}
                to={item.path}
                startIcon={<item.icon sx={{ fontSize: 18 }} />}
                sx={{
                  color: '#FFFFFF',
                  fontSize: { sm: '0.85rem', md: '1rem' },
                  fontWeight: location.pathname === item.path ? 'bold' : 'normal',
                  borderBottom: location.pathname === item.path ? 2 : 0,
                  borderRadius: 0,
                  borderColor: '#8BC53F',
                  px: { sm: 1.5, md: 2 },
                  '&:hover': {
                    backgroundColor: 'rgba(139, 197, 63, 0.1)',
                    color: '#8BC53F',
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
            <IconButton
              component="a"
              href="https://github.com/SustainSync/cs4850/tree/main/SustainSync"
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
              <GitHubIcon sx={{ fontSize: { sm: 24, md: 28 } }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 280,
            bgcolor: '#2A4B36',
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
