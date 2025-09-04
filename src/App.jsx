import React, { useState, useEffect } from 'react';
import { AppProvider, Frame, TopBar, Navigation, Card, Button, Badge, Stack, Text, Icon } from '@shopify/polaris';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Float } from '@react-three/drei';
import { 
  HomeIcon, 
  PersonIcon, 
  ProductsIcon, 
  EmailIcon,
  StarIcon,
  CodeIcon,
  GlobeIcon 
} from '@shopify/polaris-icons';

// Enhanced Space Portfolio Components
import SpaceLoader from './components/SpaceLoader';
import NavigationPanel from './components/NavigationPanel';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsShowcase from './components/ProjectsShowcase';
import SkillsMatrix from './components/SkillsMatrix';
import ContactMission from './components/ContactMission';
import ParticleField from './components/ParticleField';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Enhanced loading sequence
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const navigationItems = [
    { id: 'home', label: 'Mission Control', icon: HomeIcon, badge: 'Active' },
    { id: 'about', label: 'Commander Profile', icon: PersonIcon },
    { id: 'skills', label: 'Tech Arsenal', icon: CodeIcon, badge: 'Expert' },
    { id: 'projects', label: 'Mission Log', icon: ProductsIcon, badge: '12' },
    { id: 'contact', label: 'Communication', icon: EmailIcon },
  ];

  const topBarMarkup = (
    <TopBar
      showNavigationToggle
      userMenu={
        <div style={{ padding: '1rem' }}>
          <Stack vertical>
            <Text variant="headingMd" as="h3">Commander Jashan</Text>
            <Text variant="bodyMd" color="subdued">Full Stack Developer</Text>
          </Stack>
        </div>
      }
      onNavigationToggle={() => setIsMenuOpen(!isMenuOpen)}
    />
  );

  const navigationMarkup = (
    <Navigation location="/">
      <Navigation.Section
        items={navigationItems.map(item => ({
          label: item.label,
          icon: item.icon,
          onClick: () => setActiveSection(item.id),
          selected: activeSection === item.id,
          badge: item.badge ? (
            <Badge status={item.id === 'home' ? 'success' : 'info'}>
              {item.badge}
            </Badge>
          ) : null,
        }))}
      />
      
      <Navigation.Section
        title="Mission Status"
        items={[
          {
            label: 'Portfolio Performance',
            icon: StarIcon,
            badge: <Badge status="success">Optimal</Badge>,
          },
          {
            label: 'Skills Level',
            icon: CodeIcon,
            badge: <Badge status="success">Expert</Badge>,
          },
          {
            label: 'Projects Deployed',
            icon: GlobeIcon,
            badge: <Badge>12</Badge>,
          },
        ]}
      />
    </Navigation>
  );

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    },
    exit: { 
      opacity: 0, 
      y: -50,
      transition: { duration: 0.5, ease: "easeIn" }
    }
  };

  const renderActiveSection = () => {
    switch(activeSection) {
      case 'home':
        return <HeroSection />;
      case 'about':
        return <AboutSection />;
      case 'skills':
        return <SkillsMatrix />;
      case 'projects':
        return <ProjectsShowcase />;
      case 'contact':
        return <ContactMission />;
      default:
        return <HeroSection />;
    }
  };

  if (loading) {
    return <SpaceLoader />;
  }

  return (
    <AppProvider
      i18n={{}}
      theme={{
        colorScheme: 'dark',
        config: {
          surface: '#0a0a0a',
          onSurface: '#ffffff',
          interactive: '#00d4ff',
          primary: '#ff6b35',
          critical: '#ff4757',
          warning: '#ffa726',
          success: '#26a69a',
          decorative: '#e91e63',
        }
      }}
    >
      <div style={{ height: '100vh', position: 'relative', overflow: 'hidden' }}>
        {/* 3D Background */}
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
          <Canvas camera={{ position: [0, 0, 1] }}>
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            <OrbitControls enableZoom={false} enablePan={false} enableRotate={true} autoRotate autoRotateSpeed={0.5} />
            <ParticleField />
          </Canvas>
        </div>

        <Frame
          topBar={topBarMarkup}
          navigation={navigationMarkup}
          showMobileNavigationToggle={isMenuOpen}
          onNavigationDismiss={() => setIsMenuOpen(false)}
        >
          <div style={{ 
            background: 'linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(26,26,46,0.9) 50%, rgba(22,33,62,0.8) 100%)',
            minHeight: '100vh',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                variants={sectionVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                style={{ 
                  padding: '2rem',
                  minHeight: 'calc(100vh - 56px)',
                  position: 'relative',
                  zIndex: 1
                }}
              >
                {renderActiveSection()}
              </motion.div>
            </AnimatePresence>
          </div>
        </Frame>
      </div>
    </AppProvider>
  );
};

export default App; 