import React from "react"
//import "bulma/css/bulma.css"

export const newpost = props => {
  return (    
        <div className="container-fluid"
            style= {{whiteSpace: "pre-line",}}
        >
          <div className="columns">
            <div className="column"> 
            <h2>{props.title}</h2>
            </div> 
            <div className="column"> 
            <h4>{props.date}</h4>
            </div>
            <div className="column"> 
            <p>props.body</p>
            </div>
          </div>
        </div>
     
  )
}
