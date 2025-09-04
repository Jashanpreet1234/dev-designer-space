import React, { useState } from 'react';
import { Card, Stack, Text, Badge, Grid, ProgressBar, Tabs, Icon } from '@shopify/polaris';
import { motion } from 'framer-motion';
import { 
  CodeIcon, 
  DatabaseIcon, 
  GlobeIcon,
  MobileIcon,
  AnalyticsIcon,
  ToolsIcon,
  CloudIcon,
  SecurityIcon 
} from '@shopify/polaris-icons';

const SkillsMatrix = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);

  const skillCategories = [
    { id: 'frontend', content: 'Frontend Arsenal', icon: CodeIcon },
    { id: 'backend', content: 'Backend Systems', icon: DatabaseIcon },
    { id: 'cloud', content: 'Cloud & DevOps', icon: CloudIcon },
    { id: 'tools', content: 'Development Tools', icon: ToolsIcon }
  ];

  const skills = {
    frontend: [
      { name: 'React', level: 95, experience: '4+ years', projects: 15, icon: '⚛️', color: 'success' },
      { name: 'TypeScript', level: 90, experience: '3+ years', projects: 12, icon: '📘', color: 'info' },
      { name: 'Vue.js', level: 85, experience: '2+ years', projects: 8, icon: '💚', color: 'success' },
      { name: 'Next.js', level: 88, experience: '3+ years', projects: 10, icon: '▲', color: 'subdued' },
      { name: 'Shopify Polaris', level: 92, experience: '2+ years', projects: 6, icon: '🛍️', color: 'warning' },
      { name: 'Three.js', level: 75, experience: '1+ years', projects: 4, icon: '🎮', color: 'critical' }
    ],
    backend: [
      { name: 'Node.js', level: 93, experience: '4+ years', projects: 18, icon: '🟢', color: 'success' },
      { name: 'Express.js', level: 90, experience: '4+ years', projects: 15, icon: '🚂', color: 'subdued' },
      { name: 'Python', level: 87, experience: '3+ years', projects: 12, icon: '🐍', color: 'warning' },
      { name: 'MongoDB', level: 85, experience: '3+ years', projects: 14, icon: '🍃', color: 'success' },
      { name: 'PostgreSQL', level: 82, experience: '2+ years', projects: 8, icon: '🐘', color: 'info' },
      { name: 'GraphQL', level: 78, experience: '2+ years', projects: 6, icon: '📊', color: 'critical' }
    ],
    cloud: [
      { name: 'AWS', level: 88, experience: '3+ years', projects: 10, icon: '☁️', color: 'warning' },
      { name: 'Docker', level: 85, experience: '2+ years', projects: 12, icon: '🐳', color: 'info' },
      { name: 'Kubernetes', level: 75, experience: '1+ years', projects: 5, icon: '⚙️', color: 'subdued' },
      { name: 'Heroku', level: 90, experience: '3+ years', projects: 15, icon: '🔥', color: 'critical' },
      { name: 'Netlify', level: 92, experience: '2+ years', projects: 8, icon: '🌊', color: 'success' },
      { name: 'Vercel', level: 89, experience: '2+ years', projects: 7, icon: '⚡', color: 'subdued' }
    ],
    tools: [
      { name: 'Git', level: 95, experience: '5+ years', projects: 25, icon: '📚', color: 'critical' },
      { name: 'Webpack', level: 83, experience: '3+ years', projects: 12, icon: '📦', color: 'info' },
      { name: 'Vite', level: 87, experience: '2+ years', projects: 8, icon: '⚡', color: 'warning' },
      { name: 'ESLint', level: 90, experience: '4+ years', projects: 20, icon: '🔍', color: 'subdued' },
      { name: 'Jest', level: 85, experience: '3+ years', projects: 15, icon: '🧪', color: 'success' },
      { name: 'Figma', level: 80, experience: '2+ years', projects: 10, icon: '🎨', color: 'critical' }
    ]
  };

  const getCategorySkills = () => {
    const categoryKey = skillCategories[selectedCategory].id;
    return skills[categoryKey] || [];
  };

  const getSkillLevelColor = (level) => {
    if (level >= 90) return 'success';
    if (level >= 80) return 'info';
    if (level >= 70) return 'warning';
    return 'critical';
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
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
              ⚔️ Tech Arsenal Matrix
            </Text>
            <Text variant="bodyLg" color="subdued" alignment="center">
              Battle-tested technologies and tools mastered during space missions
            </Text>
            
            {/* Overall Stats */}
            <Grid>
              <Grid.Cell columnSpan={{ xs: 6, sm: 2, md: 2, lg: 3, xl: 3 }}>
                <Card sectioned>
                  <Stack vertical alignment="center" spacing="tight">
                    <Text variant="heading2xl" as="h3" color="success">25+</Text>
                    <Text variant="bodyMd" color="subdued">Technologies</Text>
                  </Stack>
                </Card>
              </Grid.Cell>
              
              <Grid.Cell columnSpan={{ xs: 6, sm: 2, md: 2, lg: 3, xl: 3 }}>
                <Card sectioned>
                  <Stack vertical alignment="center" spacing="tight">
                    <Text variant="heading2xl" as="h3" color="info">5+</Text>
                    <Text variant="bodyMd" color="subdued">Years Experience</Text>
                  </Stack>
                </Card>
              </Grid.Cell>
              
              <Grid.Cell columnSpan={{ xs: 6, sm: 2, md: 2, lg: 3, xl: 3 }}>
                <Card sectioned>
                  <Stack vertical alignment="center" spacing="tight">
                    <Text variant="heading2xl" as="h3" color="warning">100+</Text>
                    <Text variant="bodyMd" color="subdued">Projects Built</Text>
                  </Stack>
                </Card>
              </Grid.Cell>
              
              <Grid.Cell columnSpan={{ xs: 6, sm: 2, md: 2, lg: 3, xl: 3 }}>
                <Card sectioned>
                  <Stack vertical alignment="center" spacing="tight">
                    <Text variant="heading2xl" as="h3" color="critical">∞</Text>
                    <Text variant="bodyMd" color="subdued">Learning Mode</Text>
                  </Stack>
                </Card>
              </Grid.Cell>
            </Grid>
          </Stack>
        </Card>
      </motion.div>

      {/* Category Tabs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        style={{ marginTop: '2rem' }}
      >
        <Card sectioned>
          <Tabs
            tabs={skillCategories}
            selected={selectedCategory}
            onSelect={setSelectedCategory}
          />
        </Card>
      </motion.div>

      {/* Skills Grid */}
      <motion.div
        key={selectedCategory}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ marginTop: '2rem' }}
      >
        <Grid>
          {getCategorySkills().map((skill, index) => (
            <Grid.Cell key={skill.name} columnSpan={{ xs: 6, sm: 2, md: 2, lg: 4, xl: 4 }}>
              <motion.div
                variants={cardVariants}
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Card>
                  <div style={{
                    background: `linear-gradient(135deg, var(--p-color-bg-${skill.color}) 0%, var(--p-color-bg-${skill.color}-dark) 100%)`,
                    padding: '1rem',
                    position: 'relative',
                    overflow: 'hidden'
                  }}>
                    {/* Skill Icon and Level */}
                    <Stack distribution="spaceBetween" alignment="center">
                      <Stack spacing="tight" alignment="center">
                        <span style={{ fontSize: '2rem' }}>{skill.icon}</span>
                        <Text variant="headingMd" as="h3" color="text-inverse">
                          {skill.name}
                        </Text>
                      </Stack>
                      
                      <Badge status={getSkillLevelColor(skill.level)} size="large">
                        {skill.level}%
                      </Badge>
                    </Stack>

                    {/* Animated Background Elements */}
                    <motion.div
                      style={{
                        position: 'absolute',
                        top: '-50%',
                        right: '-50%',
                        width: '100px',
                        height: '100px',
                        background: 'rgba(255, 255, 255, 0.1)',
                        borderRadius: '50%',
                      }}
                      animate={{
                        rotate: [0, 360],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                  </div>

                  <Card.Section>
                    <Stack vertical spacing="tight">
                      {/* Progress Bar */}
                      <div>
                        <Stack distribution="spaceBetween" alignment="center">
                          <Text variant="bodyMd" color="subdued">Proficiency</Text>
                          <Text variant="bodySm" color="subdued">{skill.level}%</Text>
                        </Stack>
                        <div style={{ marginTop: '0.5rem' }}>
                          <ProgressBar 
                            progress={skill.level} 
                            size="small"
                            color={getSkillLevelColor(skill.level)}
                          />
                        </div>
                      </div>

                      {/* Experience Stats */}
                      <Stack distribution="spaceBetween">
                        <Stack vertical spacing="extraTight">
                          <Text variant="bodySm" color="subdued">Experience</Text>
                          <Text variant="bodyMd">{skill.experience}</Text>
                        </Stack>
                        
                        <Stack vertical spacing="extraTight" alignment="end">
                          <Text variant="bodySm" color="subdued">Projects</Text>
                          <Text variant="bodyMd">{skill.projects}</Text>
                        </Stack>
                      </Stack>

                      {/* Certification/Status Badge */}
                      <div style={{ textAlign: 'center', marginTop: '0.5rem' }}>
                        {skill.level >= 90 && (
                          <Badge status="success">Expert Level</Badge>
                        )}
                        {skill.level >= 80 && skill.level < 90 && (
                          <Badge status="info">Advanced</Badge>
                        )}
                        {skill.level >= 70 && skill.level < 80 && (
                          <Badge status="warning">Intermediate</Badge>
                        )}
                        {skill.level < 70 && (
                          <Badge>Learning</Badge>
                        )}
                      </div>
                    </Stack>
                  </Card.Section>
                </Card>
              </motion.div>
            </Grid.Cell>
          ))}
        </Grid>
      </motion.div>

      {/* Learning Journey CTA */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        style={{ marginTop: '3rem' }}
      >
        <Card sectioned>
          <Stack vertical spacing="loose" alignment="center">
            <Text variant="headingLg" as="h3" alignment="center">
              🚀 Continuous Learning Mission
            </Text>
            <Text variant="bodyLg" color="subdued" alignment="center">
              Always exploring new technologies and expanding the skill matrix
            </Text>
            
            <div style={{
              background: 'linear-gradient(45deg, #ff6b35, #00d4ff)',
              borderRadius: '8px',
              padding: '1.5rem',
              textAlign: 'center',
              maxWidth: '600px'
            }}>
              <Text variant="bodyLg" color="text-inverse">
                Currently learning: React Server Components, WebAssembly, and Advanced Three.js
              </Text>
            </div>
          </Stack>
        </Card>
      </motion.div>
    </div>
  );
};

export default SkillsMatrix; 