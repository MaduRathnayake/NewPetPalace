// client/src/pages/Home.js
import React from 'react';
import { Layout, Typography, Row, Col, Button, Card, Carousel } from 'antd';
import { SmileOutlined, CalendarOutlined, MedicineBoxOutlined } from '@ant-design/icons';
import './Home.css'; 
import yourImage from '../assets/images/pic.jpg';



const { Content } = Layout;
const { Title, Paragraph } = Typography;

const Home = () => {
  return (
    <Layout style={{ background: '#f8f8f8' }}>
      {/* Hero Section */}
      <div className="hero-section">
        <Title level={1} className="hero-title">
          Welcome to The Pet Palace
        </Title>
        <Paragraph className="hero-subtitle">
          Your one-stop destination for the best care and services for your furry friends.
        </Paragraph>
        <Button type="primary" size="large" href="/appointments" className="hero-btn">
          Book an Appointment
        </Button>
      </div>

      <Content style={{ padding: '50px' }}>
        {/* Services Section */}
        <Title level={2} style={{ textAlign: 'center', marginBottom: '30px' }}>
          Our Services
        </Title>
        <Row gutter={[16, 16]} justify="center">
          <Col xs={24} sm={12} md={8}>
            <Card
              hoverable
              className="service-card"
              cover={<SmileOutlined style={{ fontSize: '64px', color: '#40a9ff', marginTop: '20px' }} />}
            >
              <Title level={4}>Grooming Services</Title>
              <Paragraph>Keep your pets looking and feeling great with our professional grooming services.</Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card
              hoverable
              className="service-card"
              cover={<CalendarOutlined style={{ fontSize: '64px', color: '#40a9ff', marginTop: '20px' }} />}
            >
              <Title level={4}>Veterinary Checkups</Title>
              <Paragraph>Comprehensive health checks to ensure your pet is always in top condition.</Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card
              hoverable
              className="service-card"
              cover={<MedicineBoxOutlined style={{ fontSize: '64px', color: '#40a9ff', marginTop: '20px' }} />}
            >
              <Title level={4}>Emergency Care</Title>
              <Paragraph>24/7 emergency care services for when your pet needs immediate attention.</Paragraph>
            </Card>
          </Col>
        </Row>

        {/* Testimonials Section */}
        <Title level={2} style={{ textAlign: 'center', margin: '50px 0 30px' }}>
          What Our Clients Say
        </Title>
        <Carousel autoplay>
          <div>
            <blockquote>
              <Paragraph>
                "The Pet Palace has been a lifesaver for us. The staff is amazing, and our dog loves it here!"
              </Paragraph>
              <cite>- Jane Doe</cite>
            </blockquote>
          </div>
          <div>
            <blockquote>
              <Paragraph>
                "Outstanding care and great facilities. I highly recommend The Pet Palace to all pet owners!"
              </Paragraph>
              <cite>- John Smith</cite>
            </blockquote>
          </div>
        </Carousel>

        {/* CTA Section */}
        <div className="cta-section">
          <Title level={2} style={{ color: '#fff', marginBottom: '10px' }}>
            Ready to Give Your Pet the Best Care?
          </Title>
          <Button type="primary" size="large" href="/signup">
            Join Us Today
          </Button>
        </div>
      </Content>
    </Layout>
  );
};

export default Home;
