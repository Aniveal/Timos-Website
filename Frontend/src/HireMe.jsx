import { Link } from 'react-router-dom';

export default function Header()
{
    return (
        <div className="mainContentDiv">
            <h1 className="rainbowColors">Hire Me</h1>
            <h2>About me:</h2>
            <p>
                I am Timo Loher, 28 years old and I am currently looking for a job in the field of software engineering, 
                web development or anything related. 
                For the most part I am interested in various topics related to the craft of software engineering. This includes:
                <ul>
                    <li>Software architecture</li>
                    <li>Web development</li>
                    <li>Automated testing</li>
                    <li>UI/UX</li>
                    <li>Database design and implementation</li>
                    <li>Reasonable applications of machine leraning</li>
                    <li>Complex algorithms</li>
                </ul>


            </p>

            


        </div>
        
    )
}