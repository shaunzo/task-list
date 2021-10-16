import React from 'react';
import { Row, Col, ProgressBar  } from 'react-bootstrap';

const ProjectDetails = ({
    dateCreated,
    createdBy,
    name,
    description,
    dueDate,
    daysLeft,
    status,
    tasks}) => {
    return (
        <div className="project-details w-100">
            <Row>
                <Col>
                    <div><strong>Date created:</strong><br/>{dateCreated}</div>
                    <div><strong>Created by:</strong><br/>{createdBy}</div>
                </Col>
                <Col>
                    <div><strong>Name:</strong><br/>{name}</div>
                    <div><strong>Description:</strong><br/>{description}</div>
                </Col>
                <Col>
                    <div><strong>Due Date:</strong><br/>{dueDate}</div>
                    <div><strong>Days Left:</strong><br/>{daysLeft}</div>
                </Col>
                <Col>
                    <div><strong>Status:</strong><br/>{status}% complete</div>
                    <div><strong>Tasks:</strong><br/>{tasks}</div>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    <p><strong>Progress:</strong></p>
                    <ProgressBar max="100" now={status} />
                </Col>
            </Row>
        </div>
    )
}

export default ProjectDetails;