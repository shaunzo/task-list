import React from 'react';
import { Row, Col, ProgressBar  } from 'react-bootstrap';

const ProjectDetails = () => {
    return (
        <div className="project-details w-100">
            <Row>
                <Col>
                    <div><strong>Date created:</strong><br/>21 March 2021</div>
                    <div><strong>Created by:</strong><br/>Shaun Reddiar</div>
                </Col>
                <Col>
                    <div><strong>Name:</strong><br/>Project 1</div>
                    <div><strong>Description:</strong><br/>This is just a small description on the project</div>
                </Col>
                <Col>
                    <div><strong>Due Date:</strong><br/>23 November 2021</div>
                    <div><strong>Days Left:</strong><br/>90</div>
                </Col>
                <Col>
                    <div><strong>Status:</strong><br/>Not complete</div>
                    <div><strong>Tasks:</strong><br/>50</div>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    <p><strong>Progress:</strong></p>
                    <ProgressBar max="100" now="50" />
                </Col>
            </Row>
        </div>
    )
}

export default ProjectDetails;