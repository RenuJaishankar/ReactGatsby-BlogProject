//This is basically a modal where we format the bigger paragraphs
import React, { useState } from "react"
import ReactModal from "react-modal"
import "../components/style.css"

export const Format = props => {
    const [modal, setModal] = useState(false)

    const handleClick = () => {

        setModal(!modal)
        console.log('this works')
    }
    return (
        <div>
            {/* modal code for my post, clicking on the "close" button
          or the post title will dismiss the modal */}
            <ReactModal isOpen={modal}>
                <button onClick={handleClick} style={{ float: "right" }}>Close</button>
                <h2 className="title" onClick={handleClick}>{props.title}</h2>
                {/* <h4>{props.imageUrl}</h4> */}
                <img className="imgstyle" src={props.imageUrl} />
                <h4>{props.date}</h4>
                <p>{props.body}</p>
            </ReactModal>
            {/* code for opening the post as a modal, the title will appear
             clickable because of the title css class  */}
            <div className="container" style={{ whiteSpace: "pre-line", padding: "4px" }}>
                <h2 onClick={handleClick} className="title">{props.title}</h2>
                <h4>{props.date}</h4>
                <img className="imgsmall" src={props.imageUrl} />
                <p className={props.bodyStyle}>{props.body}</p>
            </div>
        </div>
    )
}