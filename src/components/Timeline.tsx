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
          <h1>Career History</h1>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
              contentArrowStyle={{ borderRight: '7px solid  white' }}
              date="July 2022 - Present"
              iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
              icon={<FontAwesomeIcon icon={faBriefcase} />}
            >
              <h3 className="vertical-timeline-element-title">Full Stack Developer – Python, React, AWS</h3>
              <h4 className="vertical-timeline-element-subtitle">CEREBULB, Gandhinagar, Gujarat</h4>
              <p>
                Leading the Python development team, managing projects, and driving the development of scalable solutions.
              </p>
            </VerticalTimelineElement>
  
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="April 2021 - July 2022"
              iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
              icon={<FontAwesomeIcon icon={faBriefcase} />}
            >
              <h3 className="vertical-timeline-element-title">Python Developer</h3>
              <h4 className="vertical-timeline-element-subtitle">CEREBULB, Gandhinagar, Gujarat</h4>
              <p>
                Developed and deployed Python applications, contributed to server-side development, and created APIs.
              </p>
            </VerticalTimelineElement>
  
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="January 2021 - March 2021"
              iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
              icon={<FontAwesomeIcon icon={faBriefcase} />}
            >
              <h3 className="vertical-timeline-element-title">Python Developer Intern</h3>
              <h4 className="vertical-timeline-element-subtitle">CEREBULB, Gandhinagar, Gujarat</h4>
              <p>
                Assisted in backend development, gained hands-on experience with Python, and contributed to small projects.
              </p>
            </VerticalTimelineElement>
  
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="July 2020 - December 2020"
              iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
              icon={<FontAwesomeIcon icon={faBriefcase} />}
            >
              <h3 className="vertical-timeline-element-title">Back End Developer Intern</h3>
              <h4 className="vertical-timeline-element-subtitle">MyCampusRecruit, Remote(USA)</h4>
              <p>
                Built and maintained backend APIs, automated tasks with Python, and collaborated with frontend teams.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    );
  }
  

export default Timeline;