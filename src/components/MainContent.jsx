import memeSample from "../Images/memeimg.png"

export default function MainContent() {
    return (
        <div className="outer-main-container" >
            <div className="main-content-container" >
                <div className="inputs-container" >
                    <input type="text" id="top" placeholder="Message Top" className="top inputs" />
                    <input type="text" id="bottom" placeholder="Message Bottom" className="bottom inputs" />
                </div>
                <button className="newMemeBtn" >Get a New Meme Image</button>
            </div>
            <div className="preview" >
                <img src={memeSample} className="memeSample" />
            </div>
        </div>
    )
}