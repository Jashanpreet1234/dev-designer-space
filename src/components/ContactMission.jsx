import React, { useState } from 'react';
import { 
  Card, 
  Stack, 
  Text, 
  Button, 
  TextField, 
  Select, 
  Badge, 
  Grid, 
  Icon,
  Banner,
  Spinner 
} from '@shopify/polaris';
import { motion } from 'framer-motion';
import { 
  EmailIcon, 
  LocationIcon, 
  PhoneIcon,
  ExternalIcon,
  SendIcon,
  CheckIcon,
  AlertIcon 
} from '@shopify/polaris-icons';

const ContactMission = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    message: '',
    timeline: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const projectTypes = [
    { label: 'Select Mission Type', value: '' },
    { label: '🚀 Full Stack Web Application', value: 'fullstack' },
    { label: '🛍️ E-commerce Platform', value: 'ecommerce' },
    { label: '📱 Mobile App Development', value: 'mobile' },
    { label: '🎨 UI/UX Design', value: 'design' },
    { label: '⚡ Performance Optimization', value: 'optimization' },
    { label: '🔧 Maintenance & Support', value: 'maintenance' },
    { label: '🌟 Custom Solution', value: 'custom' }
  ];

  const budgetRanges = [
    { label: 'Select Budget Range', value: '' },
    { label: '🌟 $1,000 - $5,000', value: '1k-5k' },
    { label: '🚀 $5,000 - $15,000', value: '5k-15k' },
    { label: '🌌 $15,000 - $50,000', value: '15k-50k' },
    { label: '🌠 $50,000+', value: '50k+' },
    { label: '💫 Let\'s Discuss', value: 'discuss' }
  ];

  const timelineOptions = [
    { label: 'Select Timeline', value: '' },
    { label: '⚡ ASAP (Rush Mission)', value: 'asap' },
    { label: '🚀 1-2 weeks', value: '1-2weeks' },
    { label: '🌙 1 month', value: '1month' },
    { label: '🌍 2-3 months', value: '2-3months' },
    { label: '🌌 3+ months', value: '3months+' },
    { label: '🔮 Flexible', value: 'flexible' }
  ];

  const contactInfo = [
    {
      icon: EmailIcon,
      title: 'Primary Communication',
      value: 'jashanpreetkaur2904@gmail.com',
      description: 'Best for project inquiries'
    },
    {
      icon: LocationIcon,
      title: 'Base Location',
      value: 'Earth, Solar System',
      description: 'Remote mission capable'
    },
    {
      icon: PhoneIcon,
      title: 'Emergency Contact',
      value: 'Available upon request',
      description: 'For urgent missions only'
    }
  ];

  const handleInputChange = (field) => (value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Commander name is required';
    if (!formData.email.trim()) newErrors.email = 'Communication channel required';
    if (!formData.email.includes('@')) newErrors.email = 'Valid email required';
    if (!formData.projectType) newErrors.projectType = 'Mission type must be specified';
    if (!formData.message.trim()) newErrors.message = 'Mission details required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        projectType: '',
        budget: '',
        message: '',
        timeline: ''
      });
    }, 2000);
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

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card sectioned>
          <Stack vertical spacing="loose" alignment="center">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 2, ease: "easeInOut" }}
              style={{ fontSize: '4rem' }}
            >
              🚀
            </motion.div>
            
            <Text variant="heading2xl" as="h2" alignment="center">
              Mission Transmission Successful!
            </Text>
            
            <Text variant="bodyLg" color="subdued" alignment="center">
              Your message has been received at Mission Control. 
              Commander Jashan will respond within 24 Earth hours.
            </Text>
            
            <Banner status="success">
              <p>
                <strong>Transmission ID:</strong> SPACE-{Date.now()}<br />
                <strong>Estimated Response Time:</strong> &lt; 24 hours<br />
                <strong>Priority Level:</strong> High
              </p>
            </Banner>
            
            <Button 
              primary 
              onClick={() => setSubmitted(false)}
            >
              Send Another Transmission
            </Button>
          </Stack>
        </Card>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Card sectioned>
        <Stack vertical spacing="loose" alignment="center">
          <Text variant="heading3xl" as="h1" alignment="center">
            📡 Contact Mission Control
          </Text>
          <Text variant="bodyLg" color="subdued" alignment="center">
            Ready to launch your next project? Let's collaborate!
          </Text>
          <Badge status="success">Available for new missions</Badge>
        </Stack>
      </Card>

      <div style={{ marginTop: '2rem' }}>
        <Grid>
          <Grid.Cell columnSpan={{ xs: 6, sm: 4, md: 4, lg: 8, xl: 8 }}>
            <Card sectioned>
              <Stack vertical spacing="loose">
                <Text variant="headingLg" as="h2">Send Transmission</Text>
                
                <TextField
                  label="Your Name"
                  value={formData.name}
                  onChange={(value) => setFormData({...formData, name: value})}
                  placeholder="Enter your name"
                />
                
                <TextField
                  label="Email"
                  type="email"
                  value={formData.email}
                  onChange={(value) => setFormData({...formData, email: value})}
                  placeholder="your.email@example.com"
                />
                
                <TextField
                  label="Project Details"
                  multiline={4}
                  value={formData.message}
                  onChange={(value) => setFormData({...formData, message: value})}
                  placeholder="Tell me about your project..."
                />
                
                <Button primary onClick={handleSubmit} icon={SendIcon}>
                  Launch Transmission
                </Button>
              </Stack>
            </Card>
          </Grid.Cell>
          
          <Grid.Cell columnSpan={{ xs: 6, sm: 2, md: 2, lg: 4, xl: 4 }}>
            <Card sectioned>
              <Stack vertical spacing="loose">
                <Text variant="headingLg" as="h2">Direct Contact</Text>
                
                <Stack spacing="tight">
                  <Icon source={EmailIcon} />
                  <Stack vertical spacing="extraTight">
                    <Text variant="bodyMd">jashanpreetkaur2904@gmail.com</Text>
                    <Text variant="bodySm" color="subdued">Primary contact</Text>
                  </Stack>
                </Stack>
                
                <Stack spacing="tight">
                  <Icon source={LocationIcon} />
                  <Stack vertical spacing="extraTight">
                    <Text variant="bodyMd">Available Worldwide</Text>
                    <Text variant="bodySm" color="subdued">Remote ready</Text>
                  </Stack>
                </Stack>
              </Stack>
            </Card>
          </Grid.Cell>
        </Grid>
      </div>
    </motion.div>
  );
};

export default ContactMission; 