import { Link } from 'react-router-dom';

export default function Header()
{
    return (
        <header>
            <Link className={"timoLoher rainbowColors"} to="/">Timo Loher</Link>
            <nav>
                <Link className="navLink" to="/">Home</Link>
                <Link className="navLink" to="/projects">Projects</Link>
            </nav>
        </header>
    )
}