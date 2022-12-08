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

    return (
        <div className="outer-main-container" >
            <div className="main-content-container" >
                <input type="text" id="top" placeholder="Message Top" className="top inputs" />
                <input type="text" id="bottom" placeholder="Message Bottom" className="bottom inputs" />
                <button className="newMemeBtn" onClick={handleClick} >Get a New Meme Image</button>
            </div>
            <div className="preview" >
                <img src={meme.randomImage} className="memeSample" />
            </div>
        </div>
    )
}