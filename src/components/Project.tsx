import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                    <a href="https://yujisatojr.itch.io/highspeedchase" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                    <a href="https://yujisatojr.itch.io/highspeedchase" target="_blank" rel="noreferrer"><h2>SwooshStock </h2></a>
                    <p>Currently developing a React Native app to help retail staff track and manage inventory, allowing users to manually mark items that need replenishment, making store restocking more organized and efficient.</p>
                </div>

            
                <div className="project">
                    <a href="https://www.filmate.club/" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                    <a href="https://www.filmate.club/" target="_blank" rel="noreferrer"><h2>Loop de Loop</h2></a>
                    <p>Built an Arduino powered device that converts GIFs and animations for display on a small OLED screen through pixel data handling.</p>
                </div>
                
            <div className="project">
                <a href="https://yujisatojr.itch.io/highspeedchase" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://yujisatojr.itch.io/highspeedchase" target="_blank" rel="noreferrer"><h2>Bees and Bagels</h2></a>
                <p>Built and programmed a mini arcade game using Arduino, where the player controls a bee collecting bagels while avoiding obstacles in the sky.</p>
            </div>
        
        </div>
    </div>
    );
}

export default Project;