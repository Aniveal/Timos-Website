import { useState } from 'react'

export default function BoogiePlayer() 
{
    [currentFile, setFile] = useState(null);
    [playlist, setPlaylist] = useState([]);

    useEffect(() => {

    }, [])


    return (
        <div className="mainContentDiv">
            <h1 className="rainbowColors">Boogie Player</h1>
            <div>
                buttons
            </div>
            <audio controls>

            </audio>
        </div>
    )
}