import React from "react"
import memesData from "../memesData"





export default function MainContent() {
    // use state
    let [url, setUrl] = React.useState()

    function handleClick() {
        const memesArr = memesData.data.memes
        const randomIndex = Math.floor(Math.random() * memesArr.length)
        let randomUrl = memesArr[randomIndex].url
        setUrl(prevUrl => randomUrl)
    }

    return (
        <div className="outer-main-container" >
            <div className="main-content-container" >
                <input type="text" id="top" placeholder="Message Top" className="top inputs" />
                <input type="text" id="bottom" placeholder="Message Bottom" className="bottom inputs" />
                <button className="newMemeBtn" onClick={handleClick} >Get a New Meme Image</button>
            </div>
            <div className="preview" >
                <img src={url} className="memeSample" />
            </div>
        </div>
    )
}