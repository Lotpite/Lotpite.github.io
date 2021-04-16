import React from 'react';
import './soft-skills-block.css';

const SoftSkillsBlock = ({data}) => {
    const elements = data.map((item) => {
        const {id, skillName} = item;
        return (
            <li key={id} className="soft-skills-item">
                <span className="soft-skills-item-text">{skillName}</span>
                </li>
        )
    })

    return (
        <div className="soft-skills">
                <h3 className="sidebar-title">Soft skills</h3>
                <ul className="soft-skills-list">
                   {elements}
                </ul>
            </div>
    )
}

export default SoftSkillsBlock;