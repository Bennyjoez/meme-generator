import memeSample from "../Images/memeimg.png"
import memesData from "../memesData"

function handleClick() {
    const memesArr = memesData.data.memes
    const randomIndex = Math.floor(Math.random() * memesArr.length)
    let randomUrl = memesArr[randomIndex]
    console.log(randomUrl)
}

export default function MainContent() {
    return (
        <div className="outer-main-container" >
            <div className="main-content-container" >
                <input type="text" id="top" placeholder="Message Top" className="top inputs" />
                <input type="text" id="bottom" placeholder="Message Bottom" className="bottom inputs" />
                <button className="newMemeBtn" onClick={handleClick} >Get a New Meme Image</button>
            </div>
            <div className="preview" >
                <img src={memeSample} className="memeSample" />
            </div>
        </div>
    )
}