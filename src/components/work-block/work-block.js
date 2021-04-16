import React from 'react';
import WorkList from '../work-list';

const WorkBlock = ({jobs}) => {
    const elements = jobs.map((item) => {
        const {id, ...otherItems} = item;
        
        return (
            <div key={id}>
                <WorkList {...otherItems}/>
            </div>
        )
    })

    return (
        <div className="work-experience">
            <h3 className="main-content-title">Work experience</h3>
            <div className="work-experience-block">
                 {elements} 
            </div>
        </div>
    )
}

export default WorkBlock;