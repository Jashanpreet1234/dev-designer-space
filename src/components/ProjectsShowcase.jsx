import React, { useState } from 'react';
import { Card, Stack, Text, Button, Badge, Grid, Modal, TextContainer, Thumbnail, Tabs } from '@shopify/polaris';
import { motion } from 'framer-motion';
import { 
  ExternalIcon, 
  ViewIcon, 
  CodeIcon,
  StarIcon,
  CalendarIcon 
} from '@shopify/polaris-icons';

const ProjectsShowcase = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedTab, setSelectedTab] = useState(0);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Space Station",
      description: "A futuristic e-commerce platform built with React and Shopify Storefront API",
      image: "/images/Burger_signup.png",
      tech: ["React", "Shopify API", "Node.js", "MongoDB"],
      status: "Deployed",
      stars: 45,
      category: "Full Stack",
      date: "2023-11",
      liveUrl: "https://space-commerce.demo",
      githubUrl: "https://github.com/jashanpreet/space-commerce",
      details: {
        overview: "A complete e-commerce solution featuring real-time inventory, payment processing, and an immersive space-themed UI.",
        features: ["Real-time inventory", "Secure payments", "3D product visualization", "Admin dashboard"],
        challenges: "Implementing real-time updates across multiple user sessions while maintaining performance.",
        solution: "Used WebSocket connections with Redis for caching and state synchronization."
      }
    },
    {
      id: 2,
      title: "Weekly Kitten Subscription",
      description: "Subscription service with automated delivery scheduling and payment processing",
      image: "/images/Weekly-Kitten-Subscription.png",
      tech: ["Vue.js", "Stripe", "Express", "PostgreSQL"],
      status: "Active",
      stars: 32,
      category: "SaaS",
      date: "2023-09",
      liveUrl: "https://kitten-weekly.com",
      githubUrl: "https://github.com/jashanpreet/kitten-subscription",
      details: {
        overview: "A delightful subscription service that brings joy through weekly kitten content and merchandise.",
        features: ["Subscription management", "Automated billing", "Content delivery", "User preferences"],
        challenges: "Managing complex subscription states and handling payment failures gracefully.",
        solution: "Implemented a robust state machine for subscription lifecycle management."
      }
    },
    {
      id: 3,
      title: "Inspirational Quote Generator",
      description: "AI-powered quote generation with social sharing and personalization",
      image: "/images/Inspirational_Quote_generator.png",
      tech: ["React", "OpenAI API", "Firebase", "Tailwind"],
      status: "Beta",
      stars: 28,
      category: "AI/ML",
      date: "2023-12",
      liveUrl: "https://quotes-ai.space",
      githubUrl: "https://github.com/jashanpreet/ai-quotes",
      details: {
        overview: "An intelligent quote generator that creates personalized inspirational content using AI.",
        features: ["AI-generated quotes", "Social sharing", "Mood tracking", "Daily notifications"],
        challenges: "Ensuring generated content is always appropriate and inspirational.",
        solution: "Implemented content filtering and quality scoring algorithms."
      }
    },
    {
      id: 4,
      title: "Capital Cities Learning Game",
      description: "Interactive educational game with progress tracking and multiplayer modes",
      image: "/images/capitals.png",
      tech: ["TypeScript", "Socket.io", "Redis", "Chart.js"],
      status: "Deployed",
      stars: 67,
      category: "Education",
      date: "2023-08",
      liveUrl: "https://capital-quiz.edu",
      githubUrl: "https://github.com/jashanpreet/capital-game",
      details: {
        overview: "An engaging educational platform that makes learning world capitals fun and interactive.",
        features: ["Multiplayer competitions", "Progress analytics", "Achievement system", "Leaderboards"],
        challenges: "Implementing real-time multiplayer functionality with low latency.",
        solution: "Used Socket.io with Redis adapter for scalable real-time communication."
      }
    }
  ];

  const categories = [
    { id: 'all', content: 'All Projects' },
    { id: 'fullstack', content: 'Full Stack' },
    { id: 'saas', content: 'SaaS' },
    { id: 'aiml', content: 'AI/ML' },
    { id: 'education', content: 'Education' }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Deployed': return 'success';
      case 'Active': return 'info';
      case 'Beta': return 'warning';
      default: return 'subdued';
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div>
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Card sectioned>
          <Stack vertical spacing="loose" alignment="center">
            <Text variant="heading3xl" as="h1" alignment="center">
              🚀 Mission Log: Project Archive
            </Text>
            <Text variant="bodyLg" color="subdued" alignment="center">
              Explore the stellar projects launched from this space station
            </Text>
            
            <div style={{ marginTop: '1rem' }}>
              <Tabs 
                tabs={categories}
                selected={selectedTab}
                onSelect={setSelectedTab}
              />
            </div>
          </Stack>
        </Card>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ marginTop: '2rem' }}
      >
        <Grid>
          {projects.map((project, index) => (
            <Grid.Cell key={project.id} columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
              <motion.div
                variants={cardVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Card>
                  <div style={{ position: 'relative', overflow: 'hidden' }}>
                    <Thumbnail
                      source={project.image}
                      alt={project.title}
                      size="large"
                      style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                    />
                    
                    <div style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      display: 'flex',
                      gap: '0.5rem'
                    }}>
                      <Badge status={getStatusColor(project.status)}>
                        {project.status}
                      </Badge>
                      <Badge status="info">
                        {project.category}
                      </Badge>
                    </div>
                  </div>

                  <Card.Section>
                    <Stack vertical spacing="tight">
                      <Text variant="headingMd" as="h3">
                        {project.title}
                      </Text>
                      
                      <Text variant="bodyMd" color="subdued">
                        {project.description}
                      </Text>

                      {/* Tech Stack */}
                      <div style={{ marginTop: '0.5rem' }}>
                        <Stack spacing="extraTight">
                          {project.tech.slice(0, 3).map((tech) => (
                            <Badge key={tech}>{tech}</Badge>
                          ))}
                          {project.tech.length > 3 && (
                            <Badge>+{project.tech.length - 3} more</Badge>
                          )}
                        </Stack>
                      </div>

                      {/* Stats */}
                      <Stack distribution="equalSpacing" alignment="center">
                        <Stack spacing="tight" alignment="center">
                          <StarIcon />
                          <Text variant="bodySm">{project.stars}</Text>
                        </Stack>
                        
                        <Stack spacing="tight" alignment="center">
                          <CalendarIcon />
                          <Text variant="bodySm">{project.date}</Text>
                        </Stack>
                      </Stack>

                      {/* Action Buttons */}
                      <Stack distribution="fillEvenly" spacing="tight">
                        <Button 
                          outline 
                          size="slim"
                          onClick={() => setSelectedProject(project)}
                          icon={ViewIcon}
                        >
                          Details
                        </Button>
                        
                        <Button 
                          outline 
                          size="slim"
                          url={project.liveUrl}
                          external
                          icon={ExternalIcon}
                        >
                          Live Demo
                        </Button>
                        
                        <Button 
                          outline 
                          size="slim"
                          url={project.githubUrl}
                          external
                          icon={CodeIcon}
                        >
                          Code
                        </Button>
                      </Stack>
                    </Stack>
                  </Card.Section>
                </Card>
              </motion.div>
            </Grid.Cell>
          ))}
        </Grid>
      </motion.div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <Modal
          open={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          title={selectedProject.title}
          large
        >
          <Modal.Section>
            <Stack vertical spacing="loose">
              <Thumbnail
                source={selectedProject.image}
                alt={selectedProject.title}
                size="large"
                style={{ width: '100%', height: '300px', objectFit: 'cover' }}
              />
              
              <TextContainer>
                <Text variant="headingMd" as="h3">Project Overview</Text>
                <Text variant="bodyMd">{selectedProject.details.overview}</Text>
              </TextContainer>

              <TextContainer>
                <Text variant="headingMd" as="h3">Key Features</Text>
                <ul>
                  {selectedProject.details.features.map((feature, index) => (
                    <li key={index}>
                      <Text variant="bodyMd">{feature}</Text>
                    </li>
                  ))}
                </ul>
              </TextContainer>

              <TextContainer>
                <Text variant="headingMd" as="h3">Technical Challenge</Text>
                <Text variant="bodyMd">{selectedProject.details.challenges}</Text>
                
                <Text variant="headingMd" as="h3" style={{ marginTop: '1rem' }}>Solution</Text>
                <Text variant="bodyMd">{selectedProject.details.solution}</Text>
              </TextContainer>

              <Stack distribution="center" spacing="tight">
                <Button 
                  primary
                  url={selectedProject.liveUrl}
                  external
                  icon={ExternalIcon}
                >
                  View Live Project
                </Button>
                
                <Button 
                  outline
                  url={selectedProject.githubUrl}
                  external
                  icon={CodeIcon}
                >
                  View Source Code
                </Button>
              </Stack>
            </Stack>
          </Modal.Section>
        </Modal>
      )}
    </div>
  );
};

export default ProjectsShowcase; 