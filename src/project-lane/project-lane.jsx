import React from 'react';
import {Col} from 'react-bootstrap';

const ProjectLane = ({title}) => {
    return (
        <Col className="project-lane border h-100 rounded me-4 vstack p-3">
           <p className="lead">{title}</p>
        </Col>
    )
}

export default ProjectLane;