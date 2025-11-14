import { Box, Container, Typography, Grid, Card, CardContent, Avatar, IconButton, Stack } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

interface TeamMember {
  name: string;
  role: string;
  graduation: string;
  bio: string;
  linkedin?: string;
  github?: string;
  avatar?: string; // image URL or path
}

const teamMembers: TeamMember[] = [
  {
    name: 'Youssef El-Shaer',
    role: 'Project Manager & Frontend Developer',
    graduation: 'Graduating Fall 2025',
    bio: 'Senior Computer Science Student at KSU and Cloud Engineer at Cox Enterprises with over 3 years of Professional IT/Engineering experince at various companies including PWC, Infosys, & GTRI. My role in this project was leading the architecture design, containerization, and frontend development efforts for the SustainSync project.',
    linkedin: 'https://www.linkedin.com/in/youssef-el-shaer/',
    github: 'https://github.com/Chewbacca625',
    avatar: '/SustainSync-Website/assets/yeheadshot.jpg',
  },
  {
    name: 'Zaid Khan',
    role: 'Backend Developer',
    graduation: 'Graduating Fall 2025',
    bio: 'Senior Computer Science Student at KSU with 3 years of professional/project experience at Delta Air Lines and the KSU OWL Robotics team. My role in this project focused on the database, RAG model, and general backend development efforts.',
    linkedin: 'https://www.linkedin.com/in/zaid-khan-cs/',
    github: 'https://github.com/zaidkhan05',
    avatar: '/SustainSync-Website/assets/member2.jpg',
  },
];

const About = () => {
  return (
    <Container maxWidth="xl" sx={{ py: { xs: 4, sm: 6, md: 8 }, px: { xs: 2, sm: 3, md: 4 } }}>
      {/* Header Section */}
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
          Meet Our Team
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
          The minds behind SustainSync
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
          We are a dedicated team of computer science students with a passion to leverage technology and
          address real world challanges. Our diverse skill sets and shared commitment to sustainability 
          drove us to create this innovative application that will make a real difference in the sustainability sector.
        </Typography>
      </Box>

      {/* Team Members Grid */}
      <Grid container spacing={4} justifyContent="center">
        {teamMembers.map((member, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 6, lg: 4 }} key={index}>
            <Card 
              elevation={3} 
              sx={{ 
                height: '100%',
                borderRadius: 3,
                border: '1px solid #CDE3B8',
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 8px 24px rgba(42, 75, 54, 0.15)',
                  borderColor: '#8BC53F',
                }
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 3 }}>
                  <Avatar
                    sx={{
                      width: 160,
                      height: 160,
                      mb: 2,
                      bgcolor: '#8BC53F',
                      color: '#FFFFFF',
                      fontSize: '4rem',
                      fontWeight: 'bold',
                    }}
                    src={member.avatar}
                  >
                    {!member.avatar && member.name.split(' ').map(n => n[0]).join('')}
                  </Avatar>
                  <Typography variant="h5" component="h2" fontWeight="bold" gutterBottom sx={{ color: '#2A4B36' }}>
                    {member.name}
                  </Typography>
                  <Typography variant="subtitle1" fontWeight="medium" gutterBottom sx={{ color: '#8BC53F' }}>
                    {member.role}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#5a7460', fontStyle: 'italic' }}>
                    {member.graduation}
                  </Typography>
                </Box>

                <Typography variant="body1" paragraph sx={{ textAlign: 'center', mb: 3, color: '#2A4B36' }}>
                  {member.bio}
                </Typography>

                <Stack direction="row" spacing={1} justifyContent="center">
                  {member.linkedin && (
                    <IconButton
                      component="a"
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn profile"
                      sx={{
                        color: '#2A4B36',
                        '&:hover': {
                          backgroundColor: '#CDE3B8',
                          color: '#2A4B36',
                        }
                      }}
                    >
                      <LinkedInIcon />
                    </IconButton>
                  )}
                  {member.github && (
                    <IconButton
                      component="a"
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub profile"
                      sx={{
                        color: '#2A4B36',
                        '&:hover': {
                          backgroundColor: '#CDE3B8',
                          color: '#2A4B36',
                        }
                      }}
                    >
                      <GitHubIcon />
                    </IconButton>
                  )}
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Additional Info Section */}
      <Box sx={{ mt: { xs: 6, md: 8 }, p: { xs: 3, sm: 4 }, bgcolor: '#f8faf7', borderRadius: 3, border: '2px solid #8BC53F' }}>
        <Typography 
          variant="h5" 
          gutterBottom 
          textAlign="center" 
          sx={{ 
            color: '#2A4B36',
            fontWeight: 700,
            fontSize: { xs: '1.3rem', sm: '1.5rem' },
          }}
        >
          Our Mission
        </Typography>
        <Typography 
          variant="body1" 
          textAlign="center" 
          sx={{ 
            maxWidth: '900px', 
            mx: 'auto', 
            color: '#2A4B36',
            fontSize: { xs: '0.95rem', sm: '1rem', md: '1.05rem' },
          }}
        >
          As part of our senior computing project, we demonstrated how modern AI tools and techologies
          can be leveraged to fill a gap in the sustainability sector. SustainSync represents a commitment 
          to using our technical skills for positive social and environmental impact.
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
