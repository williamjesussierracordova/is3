import { Container, Title, Text, Grid, Card, Button } from '@mantine/core';
import { MdEmail, MdPhone, MdLocationOn, MdCode, MdHelpOutline } from 'react-icons/md';
import Header from '../home/components/header';
import Footer from '../home/components/footer';
import './contact.css';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <Header />
      <Container size="lg" py="xl">
        <Title order={1} align="center" mb="xl">Contact Information</Title>
        
        <Grid gutter="xl">
          <Grid.Col xs={12} md={4}>
            <Card shadow="sm" p="lg">
              <Title order={3} mb="md">Clinic Contact</Title>
              <Text><MdEmail size={18} /> info@breastcancerclinic.com</Text>
              <Text><MdPhone size={18} /> +1 (555) 123-4567</Text>
              <Text><MdLocationOn size={18} /> 123 Health Street, Medical City, MC 12345</Text>
              <a href='mailto:info@breastcancerclinic.com'>
              <Button variant="light" color="blue" fullWidth mt="md">
                Contact Clinic
              </Button>
              </a>
            </Card>
          </Grid.Col>
          
          <Grid.Col xs={12} md={4}>
            <Card shadow="sm" p="lg">
              <Title order={3} mb="md">Developers</Title>
              <Text><MdCode size={18} /> Development Team</Text>
              <Text>For inquiries related to the application's functionality:</Text>
              <Text><MdEmail size={18} /> dev@breastcancerapp.com</Text>
              <a href='mailto:dev@breastcancerapp.com'>
              <Button variant="light" color="cyan" fullWidth mt="md">
                Contact Developers
              </Button>
              </a>
            </Card>
          </Grid.Col>
          
          <Grid.Col xs={12} md={4}>
            <Card shadow="sm" p="lg">
              <Title order={3} mb="md">Technical Support</Title>
              <Text><MdHelpOutline size={18} /> Help Desk</Text>
              <Text>For technical issues or user support:</Text>
              <Text><MdEmail size={18} /> support@breastcancerapp.com</Text>
              <Text><MdPhone size={18} /> +1 (555) 987-6543</Text>
              <a href='mailto:support@breastcancerapp.com'>
              <Button variant="light" color="green" fullWidth mt="md">
                Get Support
              </Button>
              </a>
            </Card>
          </Grid.Col>
        </Grid>
        
      </Container>
      <Footer />
    </div>
  );
};

export default ContactPage;