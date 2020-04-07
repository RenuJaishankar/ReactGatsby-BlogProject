import React, { useState } from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import ReactModal from "react-modal"
import { useMutation } from "@apollo/react-hooks"
import "bulma/css/bulma.css"
import Layout from "../components/layout"
import MainNavBar from "../components/mainnavbar"
import { Query } from "react-apollo"
import gql from "graphql-tag"

const APOLLO_QUERY = gql`
  {
    posts {
      date
      title
      body
    }
  }
`
const ADD_POST = gql`
mutation($title:String,$body:String){
createPost(title:$title,body:$body){
     title,
     date,
     body
}
}
`
const PostPage = () => {
  const [modal, setModal] = useState(false)
  const [addPost, { data }] = useMutation(ADD_POST)
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")

  const bodyHandler = event => {
    setBody(event.target.value)
  }

  const titleHandler = event => {
    setTitle(event.target.value)
  }

  const handleClick = () => {
    setModal(!modal)
  }

  const handleForm = () => {
    let t = title
    let b = body
    addPost({ variables: { title: t, body: b } })
    handleClick()
    window.location.reload()
  }
  return (
    <div>
    <ReactModal isOpen = {modal}>
      <div className="container-fluid" style={{margin:"auto"}}>
      <form >   
      
      <div className="field">
         <label className="title">Title</label>
         < div className="control">
           <input  className="title" type="text" placeholder="Title" onChange={{titleHandler}} />
       </div>
      </div>
      
       
      <div className="field">
         <label className="body">Body</label>
         < div className="control">
           <input className="body" type="text" placeholder="Body" onChange={{bodyHandler}} />
       </div>
      </div>
      <div className="field is-grouped">
  <p className="control">
    <button className="button is-primary" onSubmit={{handleForm}} >
      Submit
    </button>
  </p>
  <p className="control">
    <button className="button is-light " onClick={handleClick}>
      Cancel
    </button>
  </p>
</div>
   
    </form> 
    </div>
   </ReactModal>
    
    
       <MainNavBar /> 
       <button className="button" onClick={handleClick}>Click to display modal.</button>
      <div class="container">
        <div className="columns">
          <div className="column">
            <img
              src="https://images.all-free-download.com/images/graphicthumb/tulip_garden_stock_photo_166692.jpg"
              height="400px"
              width="400px"
            />
          </div>
          <div className="column">
            <img
              src="https://images.pexels.com/photos/39517/rose-flower-blossom-bloom-39517.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              height="300px"
              width="400px"
            />
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTGJNHoK3OEh8kbO5v1NgUzvZQw3mS-4Lp2yyV5oc2b4aIGXunn&usqp=CAU"
              height="400px"
              width="400px"
            />
          </div>
          <div className="column">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSaVh0J4EI_HFuNaYzyI0JBAAdf59ngc6GiAx-3en7I6u5wyPF0&usqp=CAU"
              height="400px"
              width="400px"
            />
          </div>
        </div>
      </div>
      <Query query={APOLLO_QUERY}>
        {({ data, loading, error }) => {
          if (loading) return <span>Loading...</span>
          if (error) return <p>{error.message}</p>

          return (
            //inner div
            <div>
              {/* simple map higher order function that will render all of our games */}
              {data.posts.map(el => (
                //container div
                <div
                  className="container"
                  style={{
                    backgroundColor: "#fafafa",
                    fontFamily: "proxima-nova",
                    maxwidth: 1000,
                    fontWeight: 400,
                    fontStyle: "normal",
                    fontSize: "15px",
                    letterSpacing: ".02em",
                    lineHeight: "2em",
                    textTransform: "none",
                    color: "#757575",
                  }}
                >
                  <section className="hero ">
                    <div className="hero-body">
                      <div className="container has-text-centered">
                        <h1 className=" title " style={{ color: "#3b4b7f" }}>
                          {el.title}
                        </h1>

                        <h2 className="title" style={{ color: "#3b4b7f" }}>
                          {el.date}
                        </h2>
                      </div>
                    </div>
                  </section>

                  <div style={{ marginLeft: "150px", marginRight: "150px" }}>
                    {el.body}
                  </div>
                </div>
              ))}
            </div>
          )
        }}
      </Query>
    </div>
  )
}
export default PostPage
