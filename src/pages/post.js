import React, { useState } from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import ReactModal from "react-modal"
import { useMutation } from "@apollo/react-hooks"
import "bulma/css/bulma.css"
import Postimage from "../images/postimage"
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
      <MainNavBar />
      <Postimage />
      <button className="button" onClick={handleClick}>Click to display modal.</button>
      <ReactModal isOpen={modal}>
        <form onSubmit={handleForm}>
          <div className="container">

            <div className="field">
              <label className="label">Title</label>
              < div className="control">
                <input className="input" type="text" placeholder="Title" onChange={titleHandler} />
              </div>
            </div>


            <div className="field">
              <label className="label">Body</label>
              < div className="control">
                <input className="input" type="text" placeholder="Body" onChange={bodyHandler} />
              </div>
            </div>
            <div className="field is-grouped">
              <div className="control">
                <button className="button is-primary" >
                  Submit
                  </button>
              </div>

              <div className="control">
                <button className="button is-light " onClick={handleClick}>
                  Cancel
                 </button>
              </div>
            </div>
          </div>
        </form>

      </ReactModal>
    
      <Query query={APOLLO_QUERY}>
      {({ data, loading, error }) => {
        if (loading) return <span>Loading...</span>
        if (error) return <p>{error.message}</p>
        return (
          //inner div
          <div>
            
            {Array.from(data.posts.map(el => (
              //container div
              <div  className="container"
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
              }}>

                                   
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
            ))).reverse()}
          </div>
        )
      }}
    </Query>
    </div>
  )
    
}

export default PostPage
