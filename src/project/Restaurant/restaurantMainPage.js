import React from 'react';
import { Container, Navbar, Nav, Button, InputGroup, FormControl, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faSearch, faShoppingCart, faUser, faBars } from '@fortawesome/free-solid-svg-icons';
import './restaurantMainPage.css';
 
const RestaurantMainPage = () => {
  return (
    <>
 
      <hr />
 
      <div className="text-center">
        <img src="path-to-your-image.jpg" alt="Descriptive Alt Text" className="my-4" style={{ maxWidth: '100%' }} />
      </div>
 
      <div className="wavy-banner mb-5"></div>
      
 
      <Container>
        <div className="text-center my-5">
          <h1>Restaurant Name 1</h1>
          <h5>France...</h5>
          <p className="open-until">Open until 9:30 PM.</p>
        </div>
 
        <Nav className="nav-pills nav-fill mb-5">
          <Nav.Item><Nav.Link href="#" active>All</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="#">Sea Food</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="#">Breakfast</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="#">Starter</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="#">Side</Nav.Link></Nav.Item>
        </Nav>
        <hr />
 
        <Row>
          {Array.from({ length: 12 }).map((_, idx) => (
            <Col md={3} className="mb-4" key={idx}>
              <Card>
                <Card.Img variant="top" src="path-to-your-image.jpg" />
                <Card.Body>
                  <Card.Title>Item Title</Card.Title>
                  <Card.Text>Short description</Card.Text>
                  <FontAwesomeIcon icon={faHeart} />
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <hr />
 
    
    </>
  );
};
 
export default RestaurantMainPage;
 