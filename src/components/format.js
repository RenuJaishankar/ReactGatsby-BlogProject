//This is basically a modal where we format the bigger paragraphs
import React, { useState } from "react"
import ReactModal from "react-modal"
import "../components/global.css"

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
                <p style={{ whiteSpace: "pre-line", padding: "4px" }}>{props.body}</p>
            </ReactModal>
            {/* code for opening the post as a modal, the title will appear
             clickable because of the title css class  */}

             <div className="card inner cardstyle" >
                <header class="card-header-title "> 
                        <div className="columns">
                         <div className = "title" >
                        <p onClick={handleClick} >{props.title}</p>
                        </div>  
                        <div className = "column" >
                        <p >{props.date}</p>
                        </div>
                        </div>
                </header> 
                <div className="card-image" >
                    <figure> 
                   
                        <img className="imgsmall"  src={props.imageUrl} alt="Placeholder image" />
                     </figure>
                </div> 
                
                
                 <div className="card-content">
                <div className="content">
                                    
                     <p className={props.bodyStyle} style={{ whiteSpace: "pre-line", padding: "4px" }}>
                            {props.body}
                    </p>
                </div>
                </div> 

              </div> 
                 {/* <h2 onClick={handleClick} className="title">{props.title}</h2> */}
                        {/* <h4>{props.date}</h4>  */}

                {/* <p style={{ whiteSpace: "pre-line", padding: "4px" }} className={props.bodyStyle}>{props.body}</p> */}
            <br></br>
        </div>
    )
}