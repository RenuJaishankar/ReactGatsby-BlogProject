import React, { useState } from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import ReactModal from "react-modal"
import { useMutation } from "@apollo/react-hooks"
import MainNavBar from "../components/mainnavbar"
import Layout from "../components/layout"
import "bulma/css/bulma.css"
import { Query } from "react-apollo"
import gql from "graphql-tag"

const APOLLO_QUERY = gql`
  {
    flowerposts {
      imageUrl
      date
      title
      body
    }
  }
`
const ADD_FLOWER_POST = gql`
  mutation($imageUrl: String, $title: String, $body: String) {
    createFlowerPost(imageUrl: $imageUrl, title: $title, body: $body) {
      imageUrl
      title
      body
    }
  }
`
const FlowerPage = () => {
  const [modal, setModal] = useState(false)
  const [addFlowerPost, { data }] = useMutation(ADD_FLOWER_POST)
  const [imageUrl, setImageUrl] = useState("")
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")

  const ImageUrlHandler = event => {
    setImageUrl(event.target.value)
  }

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
    let i = imageUrl
    let t = title
    let b = body
    addFlowerPost({ variables: { imageUrl: i, title: t, body: b } })
    handleClick()
    window.location.reload()
  }

  return (
    <div>
      <section className = "hero">
       <MainNavBar />
      {/* This button is given for showing the form */}
      <button className="button is-medium" style={{margin:"auto",width:"400px",backgroundColor:"#CF426C",color:"white",textAlign:"center"}} onClick={handleClick}>
        CLICK TO ENTER FLOWER POST
      </button>
      <br></br>
      <ReactModal isOpen={modal}>
        <form onSubmit={handleForm}>
          <div className="container">
            <div className="field">
              <label className="label">Image URL</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="ImageURL"
                  onChange={ImageUrlHandler}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Title</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Title"
                  onChange={titleHandler}
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Body</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Body"
                  onChange={bodyHandler}
                />
              </div>
            </div>
            <div className="field is-grouped">
              <div className="control">
                <button className="button is-primary">Submit</button>
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
            <div>
              
              {Array.from(
                data.flowerposts.map(el => (
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
                    <section className="hero">
                      <div className="hero-body">
                        <div className="container">
                          <img src={el.imageUrl} height="400px" width="400px" />
                        </div>
                        <div className="container has-text-centered">
                          <h1 className=" title " style={{ color: "#3b4b7f" }}>
                            {el.date}{" "}
                          </h1>
                          <h2 className="title" style={{ color: "#3b4b7f" }}>
                            {el.title}{" "}
                          </h2>
                        </div>
                      </div>
                    </section>
                    <div style={{ marginLeft: "150px", marginRight: "150px" }}>
                      {el.body}{" "}
                    </div>
                  </div>
                ))
              ).reverse()}
            </div>
          )
          //    this for return in query
          // this curly braces for data,loadin
        }}
      </Query>
      </section>
    </div>
  )
  // outer paranthesis for main return
}
// curly braces for flowerpage

export default FlowerPage
