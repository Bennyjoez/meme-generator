import React from "react"
import memesData from "../memesData"

export default function MainContent() {
    // use state
    let [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/30b1gx.jpg"
    })

    const [allMemeImages, setAllMemeImages] = React.useState({memesData})

    function handleClick() {
        const memesArr = allMemeImages.memesData.data.memes
        const randomIndex = Math.floor(Math.random() * memesArr.length)
        let randomUrl = memesArr[randomIndex].url
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

    console.log(meme)
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