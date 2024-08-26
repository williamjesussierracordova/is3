import React from 'react';
import { Container, Title, Text, Space, List, ThemeIcon } from '@mantine/core';
import { MdCheckCircle } from 'react-icons/md';
import Header from '../home/components/header';
import Footer from '../home/components/footer';
import './about.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <Header />
      <Container size="lg" py="xl">
        <Title order={1} align="center" mb="xl">About Breast Cancer Detection</Title>

        <Text size="lg" mb="md">
          Breast Cancer Detection is an innovative software tool designed to assist medical professionals in the early detection of Invasive Ductal Carcinoma (IDC), the most common type of breast cancer. Developed by a team of dedicated software engineering students from Universidad San Ignacio de Loyola in Lima, Peru, this project aims to revolutionize the way breast cancer is detected and diagnosed.
        </Text>

        <Title order={2} mt="xl" mb="md">How It Works</Title>
        <Text>
          Our software utilizes advanced computer vision techniques to analyze histograms of breast tissue. These images are processed through a pre-trained system that has been educated on a vast database of expert-validated cases. This approach allows for rapid and instantaneous detection, significantly reducing the time required for initial assessments.
        </Text>

        <Title order={2} mt="xl" mb="md">Key Features</Title>
        <List
          spacing="sm"
          size="sm"
          icon={
            <ThemeIcon color="teal" size={24} radius="xl">
              <MdCheckCircle size={16} />
            </ThemeIcon>
          }
        >
          <List.Item><b>High Accuracy:</b> Our current model boasts a peak accuracy of 78% in our confusion matrix, providing reliable initial assessments.</List.Item>
          <List.Item><b>Rapid Detection:</b> Instant analysis of breast histograms, saving valuable time in the diagnostic process.</List.Item>
          <List.Item><b>Continuous Learning:</b> The algorithm is designed to learn and improve from professional input, ensuring ongoing enhancement of its detection capabilities.</List.Item>
          <List.Item><b>Support Tool:</b> Acts as an assistive tool for medical professionals, complementing their expertise rather than replacing it.</List.Item>
          <List.Item><b>User-Friendly:</b> Intuitive interface designed for ease of use in clinical settings.</List.Item>
        </List>

        <Title order={2} mt="xl" mb="md">Our Vision</Title>
        <Text>
          While currently achieving 78% accuracy, we recognize the need for further refinement before full clinical implementation. Our software serves as a supportive tool, assisting medical professionals in their diagnostic process. In cases of discrepancy, the input from healthcare providers helps to further train and improve the algorithm, creating a synergistic relationship between human expertise and artificial intelligence.
        </Text>

        <Title order={2} mt="xl" mb="md">Technical Specifications</Title>
        <Text>
          The Breast Cancer Detection software is currently hosted on a cloud-based server, which stores both the analysis images and a database containing patient and physician information. This setup provides the minimum necessary infrastructure for operation, making it accessible for various medical facilities.
        </Text>

        <Title order={2} mt="xl" mb="md">Future Developments</Title>
        <Text>
          Our roadmap includes extensive testing in academic environments to further validate and improve the software's performance. Following this phase, we aim to refine the algorithm for deployment in clinical settings. This real-world application will not only provide valuable assistance to medical professionals but also allow the algorithm to continue learning and improving through ongoing use and feedback.
        </Text>

        <Title order={2} mt="xl" mb="md">Research Background</Title>
        <Text>
          While our project is grounded in research papers from 2022 detailing similar processes, we are pioneering the practical application of these theories. As we move forward, we are committed to rigorous testing and validation to ensure the reliability and effectiveness of our software in real-world medical scenarios.
        </Text>

        <Space h="xl" />

        <Text italic>
          Breast Cancer Detection is a project born from the passion and dedication of software engineering students, aiming to make a significant impact in the field of medical diagnostics. We are committed to continuous improvement and collaboration with medical professionals to create a tool that can truly make a difference in breast cancer detection and patient outcomes.
        </Text>
      </Container>
      <Footer />
    </div>
  );
};

export default AboutPage;