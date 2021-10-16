/* eslint-disable react-hooks/exhaustive-deps */
import './App.scss';
import Header from './header/header';
import ProjectDetails from './project-details/project-details';
import ProjectLanes from './project-lanes/project-lanes';
import ProjectMenu from './project-menu/project-menu';
import { Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';

function App() {

  var initialProject = {
    id: 1,
    dateCreated: "21 March 2021",
    createdBy: "Shaun Reddiar",
    name: "My Test Project",
    description: "This is the description for the project",
    dueDate: "23 November 2021",
    daysLeft: 90,
    status: 25,
    tasks: 4
  }
  
  var lanes = [{
      id: 1,
      name: 'To do',
      position: 0
    }, {
      id: 2,
      name: 'In Progress',
      position: 1
    }, {
      id: 3,
      name: 'Done',
      position: 2
    }
  ]
  
  var initialTasks = [
    {
      id: 1,
      projectId: 1,
      laneId: 1, 
      title: 'Task Title 1',
      assignee: 'Joe Soap',
      text: 'This is the task description 1'
    }, {
      id: 2,
      projectId: 1,
      laneId: 1, 
      title: 'Task Title 2',
      assignee: 'Joe1 Soap',
      text: 'This is the task description 2'
    }, {
      id: 3,
      projectId: 1,
      laneId: 1, 
      title: 'Task Title 3',
      assignee: 'Joe3 Soap',
      text: 'This is the task description 3'
    }, {
      id: 4,
      projectId: 1,
      laneId: 1, 
      title: 'Task Title 4',
      assignee: 'Joe4 Soap',
      text: 'This is the task description 4'
    }
  ]
  
  const [project, setProject] = useState(initialProject);
  const [createdBy, setCreatedBy] = useState(project.createdBy);
  const [dateCreated, setDateCreated] = useState(project.dateCreated);
  const [daysLeft, setDaysLeft] = useState(project.daysLeft); 
  const [description, setDescription] = useState(project.description);
  const [dueDate, setDueDate] = useState(project.dueDate); 
  const [name, setName] = useState(project.name);
  const [status, setStatus] = useState(project.status);
  const [tasks, setTasks] = useState(project.tasks);

  useEffect(() => {
    setProject(initialProject);
  }, []);

  useEffect(() => {
    setCreatedBy(project.createdBy);
    setDateCreated(project.dateCreated);
    setDaysLeft(project.daysLeft);
    setDescription(project.description);
    setDueDate(project.dueDate);
    setName(project.name);
    setStatus(project.status);
    setTasks(project.tasks);
  }, [project]);

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
            <ProjectDetails 
              createdBy={createdBy}
              dateCreated={dateCreated}
              daysLeft={daysLeft}
              description={description}
              dueDate={dueDate}
              name={name}
              status={status}
              tasks={tasks}
            />
            <ProjectLanes />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;