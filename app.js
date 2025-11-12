const { useState } = React;
const { 
  ThemeProvider, 
  createTheme,
  CssBaseline,
  Container,
  Box,
  Paper,
  Typography,
  Grid,
  Avatar,
  Card,
  CardContent,
  Button,
  Chip,
  Stack
} = MaterialUI;

// Create Material UI theme with project colors
const theme = createTheme({
  palette: {
    primary: {
      main: '#667eea',
    },
    secondary: {
      main: '#764ba2',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

// Team Member Component
function TeamMember({ name, role, image }) {
  return (
    <Card sx={{ display: 'flex', alignItems: 'center', p: 1.5, mb: 2 }}>
      <Avatar
        src={image}
        alt={name}
        sx={{ width: 60, height: 60, mr: 2, border: '3px solid #667eea' }}
      />
      <Box>
        <Typography variant="h6" component="h3">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {role}
        </Typography>
      </Box>
    </Card>
  );
}

// Resource Link Component
function ResourceLink({ href, icon, label, color = 'primary' }) {
  return (
    <Button
      variant="outlined"
      href={href}
      target="_blank"
      fullWidth
      sx={{
        justifyContent: 'flex-start',
        textTransform: 'none',
        mb: 1,
        borderLeft: 4,
        borderRadius: 1,
        py: 1.5,
      }}
      color={color}
    >
      <Box component="span" sx={{ mr: 1 }}>
        {icon}
      </Box>
      {label}
    </Button>
  );
}

// Main App Component
function App() {
  const teamMembers = [
    {
      name: 'Jane Doe',
      role: 'Lead Developer',
      image: 'images/member1.jpg'
    },
    {
      name: 'John Smith',
      role: 'Backend Engineer',
      image: 'images/member2.jpg'
    }
  ];

  const technologies = ['React', 'Node.js', 'MongoDB', 'AWS', 'Material UI'];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          py: 2,
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="xl" sx={{ height: '96vh', display: 'flex', flexDirection: 'column' }}>
          {/* Header */}
          <Paper
            elevation={3}
            sx={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              p: 2,
              mb: 2,
              flexShrink: 0,
            }}
          >
            <Typography variant="h3" component="h1" gutterBottom>
              SustainSync
            </Typography>
            <Typography variant="body1">
              <Box component="span" sx={{ fontWeight: 'bold' }}>Project ID: SS-2025-001</Box>
              {' | '}
              <Box component="span">CS 499 - Fall 2025</Box>
            </Typography>
          </Paper>

          {/* Main Content Grid */}
          <Grid container spacing={2} sx={{ flex: 1, overflow: 'hidden' }}>
            {/* Team Section */}
            <Grid item xs={12} md={4}>
              <Paper elevation={2} sx={{ p: 2, height: '100%', overflow: 'auto' }}>
                <Typography variant="h5" gutterBottom color="primary" sx={{ borderBottom: 2, borderColor: 'primary.main', pb: 1, mb: 2 }}>
                  Team Members
                </Typography>
                {teamMembers.map((member, index) => (
                  <TeamMember key={index} {...member} />
                ))}
              </Paper>
            </Grid>

            {/* Resources Section */}
            <Grid item xs={12} md={4}>
              <Paper elevation={2} sx={{ p: 2, height: '100%', overflow: 'auto' }}>
                <Typography variant="h5" gutterBottom color="primary" sx={{ borderBottom: 2, borderColor: 'primary.main', pb: 1, mb: 2 }}>
                  Project Resources
                </Typography>
                
                <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
                  Documentation
                </Typography>
                <ResourceLink href="docs/project-proposal.pdf" icon="📄" label="Project Proposal" />
                <ResourceLink href="docs/requirements-specification.pdf" icon="📄" label="Requirements Specification" />
                <ResourceLink href="docs/design-document.pdf" icon="📄" label="Design Document" />
                <ResourceLink href="docs/final-report.pdf" icon="📄" label="Final Report" />

                <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>
                  Code & Presentation
                </Typography>
                <ResourceLink 
                  href="https://github.com/Sustained-Sync-API/SustainSync" 
                  icon="🔗" 
                  label="GitHub Repository"
                  color="inherit"
                />
                <ResourceLink 
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" 
                  icon="🎥" 
                  label="Final Presentation Video"
                  color="error"
                />
              </Paper>
            </Grid>

            {/* Overview Section */}
            <Grid item xs={12} md={4}>
              <Paper elevation={2} sx={{ p: 2, height: '100%', overflow: 'auto' }}>
                <Typography variant="h5" gutterBottom color="primary" sx={{ borderBottom: 2, borderColor: 'primary.main', pb: 1, mb: 2 }}>
                  Project Overview
                </Typography>
                <Typography variant="body1" paragraph sx={{ lineHeight: 1.7 }}>
                  SustainSync is an innovative sustainability tracking platform that helps organizations 
                  monitor and reduce their environmental impact. Our solution provides real-time analytics, 
                  automated reporting, and actionable insights for sustainable business practices.
                </Typography>

                <Typography variant="h6" sx={{ mt: 3, mb: 1.5 }}>
                  Technologies Used
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                  {technologies.map((tech, index) => (
                    <Chip 
                      key={index} 
                      label={tech} 
                      color="primary" 
                      sx={{ mb: 1 }}
                    />
                  ))}
                </Stack>
              </Paper>
            </Grid>
          </Grid>

          {/* Footer */}
          <Box sx={{ textAlign: 'center', py: 1.5, mt: 2, borderTop: 1, borderColor: 'divider', bgcolor: 'white', borderRadius: 1, flexShrink: 0 }}>
            <Typography variant="body2" color="text.secondary">
              © 2025 SustainSync Team. All rights reserved.
            </Typography>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

// Render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
