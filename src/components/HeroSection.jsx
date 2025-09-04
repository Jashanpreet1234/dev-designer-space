import React, { useRef } from 'react';
import { Card, Stack, Text, Button, Badge, Divider, Icon, Grid } from '@shopify/polaris';
import { motion, useAnimation } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Text3D, MeshWobbleMaterial } from '@react-three/drei';
import { 
  CodeIcon, 
  StarIcon, 
  GlobeIcon, 
  ProductsIcon,
  PersonIcon,
  EmailIcon 
} from '@shopify/polaris-icons';

// 3D Rocket Component
const Rocket = () => {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.2;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <coneGeometry args={[0.3, 1.5, 8]} />
        <MeshWobbleMaterial factor={0.1} speed={1} color="#ff6b35" />
      </mesh>
    </Float>
  );
};

const HeroSection = () => {
  const stats = [
    { label: 'Projects Deployed', value: '12+', icon: ProductsIcon, color: 'success' },
    { label: 'Technologies Mastered', value: '25+', icon: CodeIcon, color: 'info' },
    { label: 'Client Satisfaction', value: '100%', icon: StarIcon, color: 'warning' },
    { label: 'Years Experience', value: '5+', icon: PersonIcon, color: 'critical' },
  ];

  return (
    <div style={{ position: 'relative', zIndex: 2 }}>
      <Grid>
        <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <Card sectioned>
              <Stack vertical spacing="extraLoose">
                <div style={{ textAlign: 'center' }}>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 260,
                      damping: 20,
                      delay: 0.5 
                    }}
                  >
                    <Text variant="heading4xl" as="h1" color="success">
                      🚀 Commander Jashan
                    </Text>
                  </motion.div>
                  
                  <div style={{ margin: '1rem 0' }}>
                    <Badge status="success" size="large">Mission: Active</Badge>
                  </div>
                  
                  <Text variant="headingLg" as="h2" color="subdued">
                    Full Stack Space Explorer & Code Architect
                  </Text>
                </div>

                <Divider />

                <Text variant="bodyLg" alignment="center">
                  Welcome to my digital space station! I'm a passionate developer who transforms 
                  ideas into stellar web experiences. From React frontends to Node.js backends, 
                  I navigate the cosmos of code with precision and creativity.
                </Text>

                <Stack distribution="center" spacing="tight">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button primary size="large" icon={EmailIcon}>
                      Start Mission
                    </Button>
                  </motion.div>
                  
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button outline size="large" icon={GlobeIcon}>
                      View Projects
                    </Button>
                  </motion.div>
                </Stack>
              </Stack>
            </Card>
          </motion.div>
        </Grid.Cell>

        <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Card sectioned>
              <div style={{ height: '400px', position: 'relative' }}>
                <Canvas camera={{ position: [0, 0, 3] }}>
                  <ambientLight intensity={0.5} />
                  <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                  <Rocket />
                </Canvas>
                
                <motion.div
                  style={{
                    position: 'absolute',
                    bottom: '20px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'rgba(0, 0, 0, 0.8)',
                    padding: '1rem',
                    borderRadius: '8px',
                    border: '1px solid #00d4ff',
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5 }}
                >
                  <Text variant="bodyMd" color="subdued" alignment="center">
                    Interactive 3D powered by Three.js
                  </Text>
                </motion.div>
              </div>
            </Card>
          </motion.div>
        </Grid.Cell>
      </Grid>

      {/* Mission Stats */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        style={{ marginTop: '2rem' }}
      >
        <Card sectioned>
          <Stack vertical spacing="loose">
            <Text variant="headingLg" as="h3" alignment="center">
              Mission Statistics
            </Text>
            
            <Grid>
              {stats.map((stat, index) => (
                <Grid.Cell key={index} columnSpan={{ xs: 6, sm: 3, md: 3, lg: 3, xl: 3 }}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card sectioned>
                      <Stack vertical alignment="center" spacing="tight">
                        <div style={{
                          background: `var(--p-color-bg-${stat.color})`,
                          padding: '12px',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          <Icon source={stat.icon} color={stat.color} />
                        </div>
                        
                        <Text variant="heading2xl" as="h4" color={stat.color}>
                          {stat.value}
                        </Text>
                        
                        <Text variant="bodyMd" color="subdued" alignment="center">
                          {stat.label}
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        style={{ 
          marginTop: '2rem',
          textAlign: 'center',
          background: 'linear-gradient(45deg, #ff6b35, #00d4ff)',
          borderRadius: '12px',
          padding: '2rem'
        }}
      >
        <Text variant="headingXl" as="h3" color="text-inverse">
          Ready to Launch Your Next Project?
        </Text>
        <div style={{ marginTop: '1rem' }}>
          <Text variant="bodyLg" color="text-inverse">
            Let's collaborate and create something extraordinary together
          </Text>
        </div>
        <div style={{ marginTop: '1.5rem' }}>
          <Button size="large" outline textColor="inverse">
            Initiate Contact Protocol
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection; 