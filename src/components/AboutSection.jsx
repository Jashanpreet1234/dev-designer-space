import React from 'react';
import { Card, Stack, Text, Button, Badge, Grid, Avatar, Icon } from '@shopify/polaris';
import { motion } from 'framer-motion';
import { 
  EmailIcon, 
  LocationIcon, 
  CalendarIcon,
  GlobeIcon,
  CodeIcon,
  StarIcon 
} from '@shopify/polaris-icons';

const AboutSection = () => {
  const achievements = [
    { icon: '🎓', title: 'Computer Science Graduate', description: 'Bachelor\'s in Computer Science with honors' },
    { icon: '💼', title: '5+ Years Experience', description: 'Professional web development experience' },
    { icon: '🚀', title: '50+ Projects Launched', description: 'Successfully deployed and maintained projects' },
    { icon: '🏆', title: 'Client Satisfaction 100%', description: 'Perfect track record with client projects' },
  ];

  const personalInfo = [
    { icon: LocationIcon, label: 'Based in', value: 'Earth, Solar System' },
    { icon: EmailIcon, label: 'Contact', value: 'jashanpreetkaur2904@gmail.com' },
    { icon: CalendarIcon, label: 'Available', value: 'Open for new missions' },
    { icon: GlobeIcon, label: 'Time Zone', value: 'Galactic Standard Time' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header Section */}
      <motion.div variants={itemVariants}>
        <Card sectioned>
          <Stack vertical spacing="loose" alignment="center">
            <Text variant="heading3xl" as="h1" alignment="center">
              👨‍🚀 Commander Profile: Jashan
            </Text>
            <Text variant="bodyLg" color="subdued" alignment="center">
              Full Stack Space Explorer & Digital Architect
            </Text>
            <Badge status="success" size="large">Mission Status: Active</Badge>
          </Stack>
        </Card>
      </motion.div>

      {/* Main Content Grid */}
      <div style={{ marginTop: '2rem' }}>
        <Grid>
          {/* Profile Information */}
          <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
            <motion.div variants={itemVariants}>
              <Card sectioned>
                <Stack vertical spacing="loose">
                  {/* Avatar and Basic Info */}
                  <Stack alignment="center" spacing="loose">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Avatar
                        size="extraLarge"
                        name="Jashanpreet Kaur"
                        source="/images/profile-avatar.jpg"
                        initials="JK"
                      />
                    </motion.div>
                    
                    <Stack vertical spacing="tight">
                      <Text variant="headingLg" as="h2">Jashanpreet Kaur</Text>
                      <Text variant="bodyMd" color="subdued">Full Stack Developer</Text>
                      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                        <Badge status="info">React Expert</Badge>
                        <Badge status="success">Node.js</Badge>
                        <Badge status="warning">Shopify Partner</Badge>
                      </div>
                    </Stack>
                  </Stack>

                  {/* Mission Statement */}
                  <div style={{
                    background: 'linear-gradient(45deg, rgba(0, 212, 255, 0.1), rgba(255, 107, 53, 0.1))',
                    padding: '1.5rem',
                    borderRadius: '12px',
                    border: '1px solid rgba(0, 212, 255, 0.2)'
                  }}>
                    <Text variant="headingMd" as="h3">Mission Statement</Text>
                    <Text variant="bodyLg" style={{ marginTop: '0.5rem' }}>
                      To explore the vast universe of web technologies and create stellar digital experiences 
                      that push the boundaries of what's possible. Every project is a new frontier, 
                      every challenge an opportunity to innovate.
                    </Text>
                  </div>

                  {/* Personal Info Grid */}
                  <Stack vertical spacing="tight">
                    <Text variant="headingMd" as="h3">Contact Coordinates</Text>
                    {personalInfo.map((info, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        style={{
                          background: 'rgba(255, 255, 255, 0.05)',
                          padding: '12px',
                          borderRadius: '8px',
                          border: '1px solid rgba(255, 255, 255, 0.1)'
                        }}
                      >
                        <Stack spacing="tight" alignment="center">
                          <Icon source={info.icon} color="subdued" />
                          <Stack vertical spacing="extraTight">
                            <Text variant="bodySm" color="subdued">{info.label}</Text>
                            <Text variant="bodyMd">{info.value}</Text>
                          </Stack>
                        </Stack>
                      </motion.div>
                    ))}
                  </Stack>
                </Stack>
              </Card>
            </motion.div>
          </Grid.Cell>

          {/* Journey & Achievements */}
          <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
            <motion.div variants={itemVariants}>
              <Card sectioned>
                <Stack vertical spacing="loose">
                  <Text variant="headingLg" as="h3">Space Journey Timeline</Text>
                  
                  {/* Journey Story */}
                  <div style={{
                    background: 'rgba(0, 0, 0, 0.3)',
                    padding: '1.5rem',
                    borderRadius: '12px',
                    border: '1px solid rgba(0, 212, 255, 0.2)'
                  }}>
                    <Text variant="bodyLg">
                      My journey began in the digital cosmos with a curiosity about how websites come to life. 
                      What started as tinkering with HTML has evolved into commanding full-stack spaceships 
                      across the React galaxy, Node.js nebula, and the vast Shopify universe.
                    </Text>
                    <br />
                    <Text variant="bodyLg">
                      I specialize in creating immersive web experiences that don't just function—they inspire. 
                      From e-commerce platforms that drive business growth to interactive applications that 
                      engage users, I transform ideas into digital reality.
                    </Text>
                  </div>

                  {/* Skills Summary */}
                  <div>
                    <Text variant="headingMd" as="h4">Core Expertise</Text>
                    <div style={{ 
                      display: 'grid', 
                      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
                      gap: '12px',
                      marginTop: '1rem'
                    }}>
                      {[
                        'Frontend Development',
                        'Backend Architecture', 
                        'Database Design',
                        'API Integration',
                        'E-commerce Solutions',
                        'Performance Optimization'
                      ].map((skill) => (
                        <motion.div
                          key={skill}
                          whileHover={{ scale: 1.05 }}
                          style={{
                            background: 'linear-gradient(45deg, rgba(0, 212, 255, 0.1), rgba(255, 107, 53, 0.1))',
                            padding: '8px 12px',
                            borderRadius: '20px',
                            border: '1px solid rgba(0, 212, 255, 0.3)',
                            textAlign: 'center'
                          }}
                        >
                          <Text variant="bodySm">{skill}</Text>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </Stack>
              </Card>
            </motion.div>
          </Grid.Cell>
        </Grid>
      </div>

      {/* Achievements Section */}
      <motion.div variants={itemVariants} style={{ marginTop: '2rem' }}>
        <Card sectioned>
          <Stack vertical spacing="loose">
            <Text variant="headingLg" as="h3" alignment="center">
              🏆 Mission Achievements
            </Text>
            
            <Grid>
              {achievements.map((achievement, index) => (
                <Grid.Cell key={index} columnSpan={{ xs: 6, sm: 3, md: 3, lg: 3, xl: 3 }}>
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card sectioned>
                      <Stack vertical alignment="center" spacing="tight">
                        <span style={{ fontSize: '3rem' }}>{achievement.icon}</span>
                        <Text variant="headingMd" as="h4" alignment="center">
                          {achievement.title}
                        </Text>
                        <Text variant="bodyMd" color="subdued" alignment="center">
                          {achievement.description}
                        </Text>
                      </Stack>
                    </Card>
                  </motion.div>
                </Grid.Cell>
              ))}
            </Grid>
          </Stack>
        </Card>
      </motion.div>

      {/* Call to Action */}
      <motion.div variants={itemVariants} style={{ marginTop: '2rem' }}>
        <Card sectioned>
          <div style={{
            background: 'linear-gradient(45deg, #ff6b35, #00d4ff)',
            borderRadius: '12px',
            padding: '2rem',
            textAlign: 'center'
          }}>
            <Text variant="headingLg" as="h3" color="text-inverse">
              Ready to Collaborate on Your Next Mission?
            </Text>
            <div style={{ marginTop: '1rem' }}>
              <Text variant="bodyLg" color="text-inverse">
                Let's build something extraordinary together in the digital cosmos
              </Text>
            </div>
            <div style={{ 
              marginTop: '1.5rem',
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="large" outline textColor="inverse" icon={EmailIcon}>
                  Send Transmission
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="large" outline textColor="inverse" icon={CodeIcon}>
                  View Mission Logs
                </Button>
              </motion.div>
            </div>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default AboutSection; 