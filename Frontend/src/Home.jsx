import { useState } from 'react'

export default function Home() {

    return (

        <div className="mainContentDiv">
            <h1 className="rainbowColors">Welcome!</h1>
            <p>
                I am Timo Loher and this is my website. I love making games and programming in general.  
                You can find some games and other projects I made on the "Projects" page.<br/><br/>
                Also, I am a passionate boogie-woogie dancer. I might post some news about shows or tournaments I participate in here.<br/><br/>
                I am currently looking for a job in the field of software engineering, web development or anything related, so feel free to contact me about that.
                <br/>
                Also, this website is a work in progress and not complete. If you have any suggestions or feedback, please let me know.
                <br/>

            </p>

            <h2 className="rainbowColors">Contact:</h2>
            <p>
                <a href={"mailto:timo.loher@hotmail.com"}>Send me a Mail!</a>
            </p>
        </div>
    )
}
