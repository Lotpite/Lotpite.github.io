import React from 'react';
import './education-block.css'
import EducationList from '../education-list';

const EducationBlock = ({education}) => {
    const elements = education.map((item) => {
        const {id, ...otherItems} = item;
        return (
            <div key={id}>
                <EducationList {...otherItems}/>
                
            </div>
        )
    })

    return (
        <div>
            <h3 className="main-content-title">Education</h3>
            {elements}
        </div>
    )
}

export default EducationBlock;
;