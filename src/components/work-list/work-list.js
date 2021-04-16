import React from 'react';
import './work-list.css'

const WorkList = (props) => {   
    
        const items = props.duties.map((item, i) => {
            const {id} = item;
            return (
                <li key={id} className="work-experience-duties-item">
                    {item.respons}
                </li>
            )
        })

        const {position, company, period, country} = props; 
        return (
            <div>
                <h4 className="work-experience-position">{position} <span className="work-experience-company"> {company}</span></h4>
                <p className="work-experience-period">{period} <span className="work-experience-devider">|</span> {country}</p>
                    <ul className="work-experience-duties-list">
                             {items} 
                    </ul>
            </div>
        )

}

export default WorkList;
