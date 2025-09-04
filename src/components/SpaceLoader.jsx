import React, { useState, useEffect } from 'react';
import { Spinner, Text, ProgressBar, Stack, Badge } from '@shopify/polaris';
import { motion, AnimatePresence } from 'framer-motion';

const SpaceLoader = () => {
  const [progress, setProgress] = useState(0);
  const [loadingStage, setLoadingStage] = useState('Initializing Mission');
  
  const stages = [
    'Initializing Mission Control...',
    'Loading Navigation Systems...',
    'Calibrating Thrusters...',
    'Establishing Communication...',
    'Powering Up Reactor Core...',
    'Final Systems Check...',
    'Ready for Launch! 🚀'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + (100 / stages.length);
        const stageIndex = Math.min(Math.floor(newProgress / (100 / stages.length)), stages.length - 1);
        setLoadingStage(stages[stageIndex]);
        
        if (newProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return newProgress;
      });
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, #000000, #0f0f23, #1a1a2e, #16213e)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10000,
      }}
    >
      {/* Animated Stars Background */}
      <div style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        background: `
          radial-gradient(2px 2px at 20px 30px, #eee, transparent),
          radial-gradient(2px 2px at 40px 70px, rgba(255,255,255,0.8), transparent),
          radial-gradient(1px 1px at 90px 40px, #fff, transparent),
          radial-gradient(1px 1px at 130px 80px, rgba(255,255,255,0.6), transparent),
          radial-gradient(2px 2px at 160px 30px, #ddd, transparent)
        `,
        backgroundRepeat: 'repeat',
        backgroundSize: '200px 100px',
        animation: 'starMove 20s linear infinite',
        opacity: 0.6
      }} />

      {/* Main Loading Content */}
      <div style={{
        background: 'rgba(0, 0, 0, 0.8)',
        padding: '3rem',
        borderRadius: '16px',
        border: '2px solid #00d4ff',
        boxShadow: '0 0 40px rgba(0, 212, 255, 0.3)',
        minWidth: '400px',
        textAlign: 'center',
        backdropFilter: 'blur(10px)'
      }}>
        <Stack vertical spacing="extraLoose" alignment="center">
          {/* Rocket Animation */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            style={{ fontSize: '4rem' }}
          >
            🚀
          </motion.div>

          {/* Loading Title */}
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 260,
              damping: 20
            }}
          >
            <Text variant="heading2xl" as="h1" color="text-inverse">
              Commander Jashan's Portfolio
            </Text>
          </motion.div>

          {/* Mission Status Badge */}
          <motion.div
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <Badge status="info" size="large">
              Mission Status: {Math.round(progress)}% Complete
            </Badge>
          </motion.div>

          {/* Progress Bar */}
          <div style={{ width: '100%' }}>
            <ProgressBar progress={progress} size="large" />
          </div>

          {/* Loading Stage Text */}
          <AnimatePresence mode="wait">
            <motion.div
              key={loadingStage}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Text variant="bodyLg" color="subdued">
                {loadingStage}
              </Text>
            </motion.div>
          </AnimatePresence>

          {/* Animated Dots */}
          <div style={{ display: 'flex', gap: '8px' }}>
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.4, 1, 0.4]
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
                style={{
                  width: '8px',
                  height: '8px',
                  background: '#00d4ff',
                  borderRadius: '50%'
                }}
              />
            ))}
          </div>

          {/* System Specs */}
          <div style={{
            marginTop: '1rem',
            padding: '1rem',
            background: 'rgba(0, 212, 255, 0.1)',
            borderRadius: '8px',
            border: '1px solid rgba(0, 212, 255, 0.3)'
          }}>
            <Text variant="bodyMd" color="subdued">
              Powered by Shopify Polaris • React • Three.js
            </Text>
          </div>
        </Stack>
      </div>

      <style jsx>{`
        @keyframes starMove {
          from { transform: translateY(0px); }
          to { transform: translateY(-100px); }
        }
      `}</style>
    </motion.div>
  );
};

export default SpaceLoader; 