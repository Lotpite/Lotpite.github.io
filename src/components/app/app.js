import React from 'react';
import AppHeader from '../app-header';
import ProjectList from '../project-list';
import WorkBlock from '../work-block';
import EducationBlock from '../education-block';
import SidebarLogo from '../sidebar-logo';
import ContactsBlock from '../contacts-block';
import TechSkillsBlock from '../tech-skills-block';
import SoftSkillsBlock from '../soft-skills-block';

import './app.css'

const App = () => {
    const projectLinks = [
        {href: 'https://github.com/Lotpite/my-react-resume', textContent: 'My resume(react)', stack: ' HTML, CSS, ReactJS ',  id: 'qwe'},
        {href: "https://github.com/Lotpite/project_window", textContent: 'Window', stack: ' HTML, CSS, SCSS, Less, JavaScript ',  id: 'qweq'},
        {href: 'https://github.com/Lotpite/project_portrait', textContent: 'Portrait', stack: ' HTML, CSS, JavaScript, Less ', id: 'qweqw'},
        {href: "https://github.com/Lotpite/loan/tree/master", textContent: 'Loan', stack: ' HTML, CSS, JavaScript, SASS ',  id: 'qweqwe'},
        {href: 'https://github.com/Lotpite/my_library', textContent: 'My library', stack: ' HTML, SCSS, JavaScript ', id: 'qweqweq'},
        {href: "https://github.com/Lotpite/landing_uber", textContent: 'Uber landing', stack: ' HTML, CSS ',  id: 'qweqweqw'},
        {href: "https://github.com/Lotpite/landing_wordpress", textContent: 'Wordpress landing', stack: ' HTML, CSS ',  id: 'qweqweqw0'},
        {href: "https://github.com/Lotpite/00_simple_cards", textContent: 'Cards', stack: ' HTML, CSS, JS ',  id: 'qweqweqw1'},
        {href: "https://github.com/Lotpite/00_simple_dragDrop", textContent: 'Draggable', stack: ' HTML, CSS, JS ',  id: 'qweqweqw2'},
        {href: "https://github.com/Lotpite/00_simple_slider", textContent: 'Slider', stack: ' HTML, CSS, JS ',  id: 'qweqweqw3'},
        {href: "https://github.com/Lotpite/00_simple_interactive-squares", textContent: 'Interactive squares', stack: ' HTML, CSS, JS ',  id: 'qweqweqw4'},
        {href: "https://github.com/Lotpite/00_simple_aim-game", textContent: 'Aim game', stack: ' HTML, CSS, JS ',  id: 'qweqweqw5'}
    ]

    const jobPositions = [
            {position: "Front-End developer ",
             company: "Freelance",
             period: "January 2021 - up to now ",
             country: " Ukraine",
             duties: [
                {respons: "Improving basic knowledges of HTML,CSS,JS,ReactJS", id: "q1"},
                {respons: "Involvement in Web projects", id: "q2"},
                {respons: "Taking parts in related to Web-development courses",id: "q3"}
             ],
             id: "q"
           },

           {position: "Supplier Quality Engineer ",
             company: "Jabil",
             period: "September 2019 - September 2020 ",
             country: " Ukraine",
             duties: [
                {respons: "Collaborating with suppliers of raw material", id: "q4"},
                {respons: "Initating corrective and preventive actions at supplier side", id: "q5"},
                {respons: "Providing quality audits at supplier side", id: "q6"}
             ],
             id: "qw"
           },

           {position: "QA Engineer ",
             company: "TSG",
             period: "June 2011 - September 2012 ",
             country: " Ukraine",
             duties: [
                {respons: "Providing testing using completted test cases", id: "q7"},
                {respons: "Reporting via Team Foundation Server", id: "q8"},
                {respons: "Daily meetings activity", id: "q9"}
             ],
             id: "qwe"
           },
    ]

    const educationList = [
      {place: "Uzhgorod National University", specialization: "Mathematics", period: "September 2008 - June 2015", country: "Ukraine", id: "qw"}
    ]

    const myPhoto = {alt: "my_photo", width: "150px", height: "262px" }

    const contacts = {phone: "+380993065994", email: "andrii.arkhypov@gmail.com"}

    const techSkills = [{technology: "HTML5", id: "q1"}, {technology: "CSS3", id: "q2"}, {technology: "JavaScript", id: "q3"}, {technology: "Gulp", id: "q4"}, {technology: "Git", id: "q5"}, {technology: "ReactJS", id: "q6"}]
    
    const softSkills = [{skillName: "Team work", id: "eq1"}, {skillName: "Get things done", id: "eq2"}, {skillName: "Optimistic view", id: "eq3"}, {skillName: "Problem solving", id: "eq4"}]

    return (
        <div className="main-container">
          <div className="main-content">
              <AppHeader/>
              <ProjectList links={projectLinks}/>
              <WorkBlock jobs={jobPositions}/>
              <EducationBlock education={educationList}/>
          </div>

          <div className="sidebar">
              <SidebarLogo data={myPhoto}/>
              <ContactsBlock data={contacts}/>
              <TechSkillsBlock data={techSkills}/>
              <SoftSkillsBlock data={softSkills}/>
          </div>

        </div>
    )
}

export default App;
