import React, { Suspense } from "react";
import { Link, Route } from "react-router-dom";

import twistedLogo from "./assets/TwistedDescentLogo.png";
import popLogo from "./assets/PopTheBubble.png";
import splineLogo from "./assets/SplineRacer.png";

var projectsOld = [
    {
        image: "/src/assets/TwistedDescentLogo.png",
        title: "Twisted Descent",
        description: (props) => {
            return(
                <>
                <p>A game made during the 2023 game development lab at ETH with a team of five. My contributions include: </p>
                    <ul>
                        <li>Random map generator (using <i>wave function collapse</i>)</li>
                        <li>Sound engine</li>
                        <li>Soundtrack and sound effects</li>
                    </ul>
                <p>You can download the game on github: </p>
                <a style={{color: "darkred"}} href="https://github.com/Aniveal/Twisted-Descent-Game">https://github.com/Aniveal/Twisted-Descent-Game</a>
                    
                <div style={{flexDirection: "column", display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <h3>Trailer:</h3>
                    <iframe width="600" height="400"
                        src="https://www.youtube.com/embed/sELlfsgtPJE">
                    </iframe>
                </div>
                   
                </>
            )
        },
        imagehref: "https://github.com/Aniveal/Twisted-Descent-Game"
    },
    {
        image: "/src/assets/PopTheBubble.png",
        title: "Pop the Bubble",
        description: (props) => {
            return(
                <>
                <p>A game that I made with two of my friends for the 2025 Global Game Jam in just 48h. Even though the final result is kind of bad, I had a blast making it! 
                    It is a puzzle game about finding out how to pop the bubble in 10 different ways. It includes some very funny and very stupid puns. I know only of one person who completed
                    the game completely on his own, so I guess it's a rather difficult game.<br/>
                    You can try out the game right here on the website or on itch.io. <br/><br/>
                    (to get the game to play in fullscreen, you have to press the fullscreen button twice)
                </p>
                <a style={{color: "darkred"}} href="https://aniveal.itch.io/pop-the-bubble">https://aniveal.itch.io/pop-the-bubble</a>
                <iframe style={{marginTop: "20px"}} frameBorder="0" src="https://itch.io/embed-upload/12630894?color=000000" allowFullscreen="" width="600" height="400"><a href="https://aniveal.itch.io/pop-the-bubble">Play Pop the Bubble on itch.io</a></iframe>
                </>
            )
        },
        imagehref: "https://aniveal.itch.io/pop-the-bubble"
    },
    {
        image: "/src/assets/SplineRacer.png",
        title: "Spline Racer",
        description: (props) => {
            return(
                <>
                <p>An online-multiplayer game. It's a turn-based racing game based on the pen&paper game <a href="https://en.wikipedia.org/wiki/Racetrack_(game)">"racetrack" </a> 
                that I played as a child in school (instead of listening to the teacher). It is still buggy, but it works. However, I underestimated how complicated it is to make an online multiplayer compared to a singelplayer game.
                That's why I stopped working on it for now. I might redo the whole thing and finish it at some point.<br/><br/>
                (to get the game to play in fullscreen, you have to press the fullscreen button twice)
                </p>

                <a style={{color: "darkred"}} href="https://aniveal.itch.io/spline-racer">https://aniveal.itch.io/spline-racer</a>
                <iframe style={{marginTop: "20px"}} frameBorder="0" src="https://itch.io/embed-upload/15804810?color=333333" allowFullscreen="" width="600" height="400"><a href="https://aniveal.itch.io/spline-racer">Play Spline Racer on itch.io</a></iframe>
                </>
            )
        },
        imagehref: "https://aniveal.itch.io/spline-racer"
    }
]

var games = [
    {
        image: twistedLogo,
        imagehref: "/games/0"
    },
    {
        image: popLogo,
        imagehref: "/games/1"
    },
    {
        image: splineLogo,
        imagehref: "/games/2"
    }
    
]

function ProjectEntry({image, imagehref})
{
    return (
        <article className="projectEntry">
            {imagehref && 
            <Link to={imagehref}>
                <img src={image} className="underglow"></img>
            </Link>}
        </article>
        
    )
}

export function Projects() {
    return (
        <div className="mainContentDiv">
            <h1 className="rainbowColors">Games</h1>
            <ul className="projectsParent">
                {games.map((project, index) => (
                    
                    <ProjectEntry key={index} image={project.image} imagehref={project.imagehref}></ProjectEntry>
                    
                )
            )}
            </ul>
        </div>
    )
}