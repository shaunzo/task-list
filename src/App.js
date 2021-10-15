import './App.scss';
import Header from './header/header';
import ProjectDetails from './project-details/project-details';
import ProjectLanes from './project-lanes/project-lanes';
import ProjectMenu from './project-menu/project-menu';
import { Container, Row, Col } from 'react-bootstrap';

function App() {

  const onProjectSettings = () => {
    console.log('Project Settings');
  }

  const onAddLane = () => {
    console.log('Add lane');
  }

  const onAddTask = () => {
    console.log('Add Task');
  }

  return (
    <div className="d-flex flex-column h-100 vstack">
      <Header />
      <Container className="h-100" fluid>
        <Row className="h-100">
          <Col className="bg-secondary text-light p-3 text-center" md={2}>
            <ProjectMenu
              onProjectSettings={onProjectSettings}
              onAddLane={onAddLane}
              onAddTask={onAddTask}/>
          </Col>
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
