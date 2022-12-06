import memeSample from "../Images/memeimg.png"
import memesData from "../memesData"

console.log(memesData)

export default function MainContent() {
    return (
        <div className="outer-main-container" >
            <form className="main-content-container" >
                <input type="text" id="top" placeholder="Message Top" className="top inputs" />
                <input type="text" id="bottom" placeholder="Message Bottom" className="bottom inputs" />
                <button className="newMemeBtn" >Get a New Meme Image</button>
            </form>
            <div className="preview" >
                <img src={memeSample} className="memeSample" />
            </div>
        </div>
    )
}