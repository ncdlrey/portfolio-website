import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import {faRobot, faCode} from '@fortawesome/free-solid-svg-icons';
import {faArrowTrendDown} from '@fortawesome/.free-solid-svg-icons-CZY7vM64';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Algorithms",
    "CSS",
    "SQL",
    "Chakra UI",
    "Web Development",
    "Web Scraping",
];

const labelsSecond = [
    "SPSS",
    "R",
    "Data Visualization",
    "Excel",
    "Data Interpretation",
];

const labelsThird = [
    "Arduino",
    "Circuit Analysis",
    "Troubleshooting",
    "GitHub",
    "IoT",
    "Design",
    "Raspberry Pi",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faCode} size="3x"/>
                    <h3>Programming Toolbox</h3>
                    <p>Skilled in Python, Java, C, HTML, and JavaScript, with experience developing exciting projects and delivering effective solutions through clean, efficient code.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faArrowTrendDown} size="3x"/>
                    <h3>Statistical Analysis</h3>
                    <p>Proficient in data analysis with a strong foundation in statistical methods, including regression analysis, correlation, hypothesis testing, and data interpretation.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                <FontAwesomeIcon icon={faRobot} size="3x"/>
                    <h3>Robotics</h3>
                    <p>Experimenting with automation and bringing robots to life with sensor programming using Arduino and Raspberry Pi microcontrollers.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;