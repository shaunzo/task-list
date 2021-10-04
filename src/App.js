import './App.css';
import Header from './header/header';
import ProjectDetails from './project-details/project-details';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <div className="d-flex flex-column h-100">
      <Header />
      <Container className="h-100" fluid>
        <Row className="h-100">
          <Col className="bg-secondary text-light p-3" md={2}>Menu</Col>
          <Col className="p-3 d-flex">
            <ProjectDetails />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
