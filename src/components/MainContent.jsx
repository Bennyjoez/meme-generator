import React from "react"

function MainContent() {
    // use state
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/30b1gx.jpg"
    })

    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    function handleClick() {
        const randomIndex = Math.floor(Math.random() * allMemes.length)
        let randomUrl = allMemes[randomIndex].url
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                randomImage: randomUrl
            }
        })
    }

    function handleChange(event) {
        const {name, value} = event.target
        
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <div className="outer-main-container" >
            <div className="main-content-container" >
                <input 
                    type="text" 
                    id="top" 
                    placeholder="Message Top" 
                    className="inputs" 
                    name="topText"
                    onChange={handleChange}
                    value={meme.topText}
                />
                
                <input 
                    type="text" 
                    id="bottom" 
                    placeholder="Message Bottom" 
                    className="inputs" 
                    name="bottomText"
                    onChange={handleChange}
                    value={meme.bottomText}
                />
                <button className="newMemeBtn" onClick={handleClick} >Get a New Meme Image</button>
            </div>
            <div className="preview" >
                <img src={meme.randomImage} className="memeSample" />
                <h2 className="top-text">{meme.topText}</h2>
                <h2 className="bottom-text">{meme.bottomText}</h2>
            </div>
        </div>
    )
}

export default MainContent