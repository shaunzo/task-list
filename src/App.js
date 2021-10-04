import './App.scss';
import Header from './header/header';
import ProjectDetails from './project-details/project-details';
import ProjectLanes from './project-lanes/project-lanes';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <div className="d-flex flex-column h-100 vstack">
      <Header />
      <Container className="h-100" fluid>
        <Row className="h-100">
          <Col className="bg-secondary text-light p-3" md={2}>Menu</Col>
          <Col className="p-3 d-flex content-area">
            <ProjectDetails />
            <ProjectLanes />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
