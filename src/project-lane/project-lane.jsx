import React from 'react';
import {Col} from 'react-bootstrap';
import ProjectTask from '../project-task/project-task';

const ProjectLane = ({title}) => {
    return (
        <Col className="project-lane h-100 rounded me-4 vstack p-3 bg-light">
           <p className="lead">{title}</p>
           <ProjectTask
                assignee="Joe Soap"
                text="Small description of task"
                title="Task 1 title"
            />

            <ProjectTask
                assignee="Joe Soap"
                text="Small description of task"
                title="Task 1 title"
            />

            <ProjectTask
                assignee="Joe Soap"
                text="Small description of task 3"
                title="Task 3 title"
            />
        </Col>
    )
}

export default ProjectLane;