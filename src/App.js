import './App.css';
import Header from './header/header';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <div className="d-flex flex-column h-100">
      <Header />
      <Container className="h-100" fluid>
        <Row className="h-100">
          <Col>Menu</Col>
          <Col>Content</Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
