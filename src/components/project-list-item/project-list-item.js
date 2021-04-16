import React from 'react';
import './project-list-item.css'

const ProjectListItem = (props) => {
    const {textContent, href, stack} = props;
    return (
        <div>
            <span className="projects-item-text">
                <a href={href}
                    className="my-projects-link">{textContent}</a>
                    ...........
                <span className="my-project-item-breacket">[</span>{stack}<span
                    className="my-project-item-breacket">]</span>
            </span>
        </div>
    )
}

export default ProjectListItem;