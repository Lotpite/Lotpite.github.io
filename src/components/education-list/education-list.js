import React from 'react';
import "./education-list.css"

const EducationList = (props) => {

    const {place, specialization, period, country} = props;
    return (
        <div>
            <h4 className="education-place">{place}</h4>
            <h5 className="education-direction">{specialization}</h5>
            <p className="education-period">{period} <span className="education-devider">|</span> {country}</p>
        </div>
    )
}

export default EducationList;