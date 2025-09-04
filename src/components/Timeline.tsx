import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Compiled Experiences: Extracurriculars & Volunteering </h1>
        
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="March 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">cuHacking 6 Hackathon</h3>
            <h4 className="vertical-timeline-element-subtitle">Carleton University, Ottawa ON</h4>
            <p>
            Built a robot and website platform that would allow those with physical disabilities to gain independence back in their homes. 
            </p>

            
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="October 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >

            <h3 className="vertical-timeline-element-title">InnovateNow Hackathon</h3>
            <h4 className="vertical-timeline-element-subtitle">Carleton University, Ottawa ON</h4>
            <p>
              Designed an interactive website featuring a dashboard for desplaying health vitals with the aim to improve healthcare accessibility for Ottawa residents. 
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="July 2023 - November 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Social Media Manager</h3>
            <h4 className="vertical-timeline-element-subtitle">PHYSICA, Toronto ON</h4>
            <p>
              Managed Instagram page for an organization dedicated to connecting youth to STEM by creating all social media posts and stories in Canva to support outreach and event promotion.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021 - 2021"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Technovation</h3>
            <h4 className="vertical-timeline-element-subtitle">Toronto Metropolitan University, Toronto ON
            </h4>
            <p>
              Developed a mobile app in Thunkable to make mental health care more accessible and engaging, focusing on designing a user-friendly, visually appealing interface.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="January 2022 - May 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Robotics Team</h3>
            <h4 className="vertical-timeline-element-subtitle">Tokyo, Japan</h4>
            <p>
              Built a line-following robot using Arduino, enabling it to autonomously navigate paths. Integrated with IoT functionality, it could also be controlled and monitored in real time from a laptop.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;