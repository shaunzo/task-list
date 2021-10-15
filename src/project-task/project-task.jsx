import React from 'react';
import {Card, Button} from 'react-bootstrap';

const ProjectTask = ({title, text, assignee}) => {

    return (
        <Card className="mb-3">
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle>{assignee}</Card.Subtitle>
                <Card.Text>{text}</Card.Text>
                <Button>View</Button>
            </Card.Body>
        </Card>
    )

}

export default ProjectTask;