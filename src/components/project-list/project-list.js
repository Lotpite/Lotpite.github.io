import React from 'react';

import ProjectListItem from '../project-list-item';
import './project-list.css';

const ProjectList = ({links}) => {
    const items = links.map((link) => {
        const {id, ...other} = link;
        return (
            <li key={id} className="projects-item">
                <ProjectListItem {...other}/>
            </li>
        )
    })
    
    return (
        <div>
            <h3 className="main-content-title">Projects(github)</h3>
            <ol className="projects-list">
                {items}
            </ol>
        </div>
    )
};


export default ProjectList;
