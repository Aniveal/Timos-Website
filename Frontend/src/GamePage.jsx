import { useParams } from 'react-router-dom';


export default function ExpandableGamePage()
{
    const games = [
        {
            id:0,
            name: "Twisted Descent",
            link: "https://github.com/Aniveal/Twisted-Descent-Game",
            date: "July 2023",
            description: (props) => {
                return(
                    <article class="gamePageArticle">
                        <p>A game made during the 2023 game development lab at ETH with a team of five. It's a rouge-like game about the legend of the greek 
                            hero Theseus who explores the labyrinth of the minotaur. He is armed only with Ariadne's thread. The game features a physics based combat mechanic using the 
                            thread and procedurally generated levels of increasing difficulty.
                            
                            The My contributions include: </p>
                            <ul>
                                <li>Random map generator (using <i>wave function collapse</i>)</li>
                                <li>Sound engine</li>
                                <li>Soundtrack and sound effects</li>
                            </ul>
                        
                        <div style={{flexDirection: "column", display: "flex", alignItems: "center", justifyContent: "center"}}>
                            <h3>Trailer:</h3>
                            <iframe width="600" height="400"
                                src="https://www.youtube.com/embed/sELlfsgtPJE">
                            </iframe>
                        </div>
                    </article>
                    
                    
                )}
            
        },
        
        {
            id:1,
            name: "Pop the Bubble!",
            link: "https://aniveal.itch.io/pop-the-bubble",
            itchLink:"https://itch.io/embed-upload/12630894?color=000000",
            description: () =>
            {
                return(
                    <p style={{maxWidth: "1000px"}}>
                        A small point&click puzzle game about finding 10 different ways to pop a bubble. It is not really playable in a window or on a monitor with smaller resolution than 1080p, so play in fullscreen! Also, 
                        there is little oversight for playing in the browser. To open the menu in-game, one has to press the 'esc' key. However this will exit the fullscreen mode first before actually opening the menu on the second press.
                        This is due to the game being developed as a desktop application first, and then built for the web. 
                    </p>
                )
            }
        },

        {
            id:2,
            name: "Spline Racer",
            link: "https://aniveal.itch.io/spline-racer",
            itchLink:"https://itch.io/embed-upload/15804810?color=333333",
            description: () =>
            {
                return(

                    <p style={{maxWidth: "1000px"}}>
                        A prototype of a turn-based racing game. The game is based on the pen&paper game "Racetrack" that I played as a child in school. It's 
                        possible to play alone to check it out. 
                        Implementing the online multiplayer was very challenging and hard to learn, so I stopped working on it for now. It has quite some bugs, but I think
                        it is playable. I might redo the whole thing from scratch at one point in the future.<br/>
                    <h3>Controls</h3>
                        Drag the arrow of the car to choose the next turn position. Click "Next Turn" or space bar to apply movement. Crashing results in a reset to the last checkpoint. Always the player moving gets the crash, so it's not worth it to ram other players at the current version. 


                    <h3>Current Features</h3>

                    <ul>
                        <li>3 special move types: Drift, Ghost, Boost</li>
                        <li>Car upgrades: buy move type, increase acceleration, fuel, move type cost</li>
                        <li>12 car skins with selectable color</li>
                        <li>Procedurally generated tracks</li>
                    </ul>

                    <h3>Planned Features</h3>
                    <ul>
                        <li>Sound! </li>
                        <li>Weapons or other possibilities to kill other players</li>
                        <li>Different game rules (turn timer, randomized turn order, destructible environment...)</li>
                        <li>Overall more chaos :)</li>
                    </ul>

                    </p>

                    
                )
            }
        }

    ]

    const { gameID } = useParams();
    console.log(gameID)
    const game = games.find(game => game.id == gameID);


    return (

        
        <div className="mainContentDiv">
            <h2 className="rainbowColors">{game.name}</h2>
            {game.itchLink && <iframe frameBorder="0" src={game.itchLink} allowFullScreen={true} width="1280" height="720"></iframe>}
            {game.description && game.description()}
            {game.link && <p>
                You can download the game on: <a href={game.link}>{game.link}</a>
            </p>}
        
        </div>
        
    )
}