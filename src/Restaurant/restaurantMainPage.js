import React from 'react';
import { Container, Navbar, Nav, Button, InputGroup, FormControl, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faSearch, faShoppingCart, faUser, faBars } from '@fortawesome/free-solid-svg-icons';
import './restaurantMainPage.css';

const RestaurantMainPage = () => {
  return (
    <>
      <Navbar bg="white" expand="lg" className="py-3 shadow-sm">
        <Container>
        <Navbar.Brand href="#">
            <FontAwesomeIcon icon={faBars} className="mr-2" />
                Zbuyer
        </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
            <Nav className="me-auto">
              {/* Left aligned items, if any */}
            </Nav>
            <div className="d-flex align-items-center justify-content-center">
              <InputGroup>
                <InputGroup.Text>
                  <FontAwesomeIcon icon={faSearch} />
                </InputGroup.Text>
                <FormControl
                  type="search"
                  placeholder="Search..."
                  aria-label="Search"
                />
              </InputGroup>
              <Button className="search-button mx-2">Search</Button>
              <Button className="cart-signin-button mx-2">
                <FontAwesomeIcon icon={faShoppingCart} /> Cart: 0
              </Button>
              <Button className="cart-signin-button">
                <FontAwesomeIcon icon={faUser} className="mr-2" /> Sign in
            </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <hr /> 

      <div className="text-center">
        <img src="path-to-your-image.jpg" alt="Descriptive Alt Text" className="my-4" style={{ maxWidth: '100%' }} />
      </div>

      <div className="wavy-banner mb-5"></div>
      

      <Container>
        <div className="text-center my-5">
          <h1>Restaurant Name 1</h1>
          <h5>France...</h5>
          <p className="open-until">Open until 9:30 PM</p>
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

      <footer className="footer mt-auto py-3">
        <Container className="text-center">
            <Row>
            <Col>
                © Zbuyer
            </Col>
            <Col>
                <Nav className="justify-content-center">
                <Nav.Item><Nav.Link href="#">Get help</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="#">Create a business account</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="#">About</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="#">Contact us</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="#">Student discount</Nav.Link></Nav.Item>
                </Nav>
            </Col>
            </Row>
        </Container>
    </footer>

    </>
  );
};

export default RestaurantMainPage;



