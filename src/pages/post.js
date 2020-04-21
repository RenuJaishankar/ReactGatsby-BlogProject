import React, { useState } from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import ReactModal from "react-modal"
import { useMutation } from "@apollo/react-hooks"
import "bulma/css/bulma.css"
import BlogImage from "../images/blogimage"
//import Layout from "../components/layout"
import MainNavBar from "../components/mainnavbar"
import Modal from "../components/modal"
import { Query } from "react-apollo"
import gql from "graphql-tag"
import "../components/global.css"
import  {Format} from "../components/format"
import Postquery from "../components/postquery"
import {PAGED_QUERY,SIMPLE_QUERY,TOTAL_QUERY} from "../components/allqueries"
// const SIMPLE_QUERY = gql`
//   {
//     posts {
//       imageUrl
//       date
//       title
//       body
//     }
//   }
// `
const ADD_POST = gql`
mutation($imageUrl:String, $title: String, $body: String) {
  createPost(imageUrl: $imageUrl,title: $title, body: $body) {
    imageUrl
    title
    date
    body
  }
}
`

const PostPage = () => {
   const [modal, setModal] = useState(false)

  let stylefonts = {
    fontFamily: "Pacifico , cursive"
  }
  const handleClick = () => {

     setModal(!modal)
    console.log('this works')
  }
  return (
    <div className="bcolor">
      <section className="hero">
        <MainNavBar />

        <BlogImage />
        <div className="hero-body">
          <div className="container"

            style={{

              textAlign: "center",
              color: "#3b4b7f",
              fontFamily: "Pacifico,cursive",
              fontSize: "30px",

              fontWeight: "bold",

            }}
          >

            <h4 style={stylefonts}> This is my blog.</h4>
            <h4 style={stylefonts}> I have a great passion for programming.</h4>
            <h4 style={stylefonts}>Gardening,photography and music are my hobbies.</h4>

          </div>
        </div>
      </section>
      {/* <button className="button" onClick={handleClick}>
        Click to display modal.
      </button> */}
      {/* <Modal text = {addPost}/> */}
      <Modal mutation={ADD_POST} />
      <Postquery sentQuery={PAGED_QUERY} senttotalQuery={TOTAL_QUERY}/> 
        {/* <Postquery/> */}
    </div>
  )
}

export default PostPage
