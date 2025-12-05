import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline, Box } from '@mui/material';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import CDay from './pages/CDay';
import FinalReport from './pages/FinalReport';

// Create a custom theme for SustainSync with brand colors
const theme = createTheme({
  palette: {
    primary: {
      main: '#2A4B36', // Dark Green
      light: '#9FBF84', // Mid Green
      dark: '#1a2f22',
    },
    secondary: {
      main: '#8BC53F', // Accent Green
      light: '#CDE3B8', // Pale Green
      dark: '#6a9a2f',
    },
    background: {
      default: '#f8faf7',
      paper: '#ffffff',
    },
    text: {
      primary: '#2A4B36', // Dark Green for text on light backgrounds
      secondary: '#5a7460',
    },
  },
  typography: {
    fontFamily: '"Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
    h1: {
      fontWeight: 800,
      color: '#2A4B36',
      letterSpacing: '-0.02em',
    },
    h2: {
      fontWeight: 800,
      color: '#2A4B36',
      letterSpacing: '-0.02em',
    },
    h3: {
      fontWeight: 700,
      color: '#2A4B36',
      letterSpacing: '-0.01em',
    },
    h4: {
      fontWeight: 700,
      color: '#2A4B36',
      letterSpacing: '-0.01em',
    },
    h5: {
      fontWeight: 600,
      color: '#2A4B36',
      letterSpacing: '-0.01em',
    },
    h6: {
      fontWeight: 600,
      color: '#2A4B36',
      letterSpacing: '-0.01em',
    },
    body1: {
      letterSpacing: '-0.01em',
      lineHeight: 1.7,
    },
    body2: {
      letterSpacing: '-0.01em',
      lineHeight: 1.6,
    },
    button: {
      fontWeight: 600,
      letterSpacing: '-0.01em',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 12,
          fontWeight: 600,
          padding: '10px 24px',
        },
        contained: {
          backgroundColor: '#8BC53F',
          color: '#FFFFFF',
          boxShadow: '0 2px 8px rgba(139, 197, 63, 0.3)',
          '&:hover': {
            backgroundColor: '#6a9a2f',
            boxShadow: '0 4px 12px rgba(139, 197, 63, 0.4)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          letterSpacing: '-0.01em',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router basename="/SustainSync-Website">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
          }}
        >
          <Navbar />
          <Box component="main" sx={{ flexGrow: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/cday" element={<CDay />} />
              <Route path="/final-report" element={<FinalReport />} />
            </Routes>
          </Box>
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
