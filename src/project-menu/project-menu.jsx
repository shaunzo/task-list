import React from 'react'
import {Button, ButtonGroup} from 'react-bootstrap';

const ProjectMenu = ({onProjectSettings, onAddLane, onAddTask}) => {

    return (
        <ButtonGroup vertical>
        <Button variant="outline-light" onClick={onProjectSettings}>Project Settings</Button>
        <Button variant="outline-light" onClick={onAddLane}>Add Lane</Button>
        <Button variant="outline-light" onClick={onAddTask}>Add Task</Button>
        </ButtonGroup>
    )
}

export default ProjectMenu;