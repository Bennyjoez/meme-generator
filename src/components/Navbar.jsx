import memeCoverImage from "../Images/meme-cover.png"

export default function Navbar() {
    return (
        <nav className="navbar" >
            <img src={memeCoverImage} alt="meme logo" className="meme-cover-image" />

            <h1 className="main-title">Meme Generator</h1>
            <h3 className="subtitle">React Course - Project 3</h3>
        </nav>
    )
}