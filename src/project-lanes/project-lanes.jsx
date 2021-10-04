import React from 'react';
import ProjectLane from '../project-lane/project-lane';
import './project-lanes.scss';

const ProjectLanes = () => {
    return (
        <div className="project-lanes d-flex hstack w-100 mt-4 h-100 justify-content-between">
            <ProjectLane title ="To do" />
            <ProjectLane title = "In Progress"/>
            <ProjectLane title = "Done" /> 
        </div>
    )
}

export default ProjectLanes;