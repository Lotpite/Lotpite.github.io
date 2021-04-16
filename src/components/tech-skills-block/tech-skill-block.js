import React from 'react';
import './tech-skill-block.css';

const TechSkillsBlock = ({data}) => {
    const elements = data.map((item) => {
        const {id, technology} = item;
        return (
            <li key={id} className="tech-skills-item">
                <span className="tech-skills-item-text">{technology}</span>
                </li>
        )
    })

    return (
        <div className="tech-skills">
                <h3 className="sidebar-title">tech Skills</h3>
                <ul className="tech-skills-list">
                   {elements}
                </ul>
            </div>
    )
}

export default TechSkillsBlock;