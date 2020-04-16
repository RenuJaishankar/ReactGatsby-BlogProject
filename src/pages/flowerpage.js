import React, { useState } from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import ReactModal from "react-modal"
import { useMutation } from "@apollo/react-hooks"
import MainNavBar from "../components/mainnavbar"
import Layout from "../components/layout"
import Modal from "../components/modal"
import "bulma/css/bulma.css"
import { Query } from "react-apollo"
import gql from "graphql-tag"
import "../components/style.css"
import  {Format} from "../components/format.js"

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
// Creating a mutation here which links to backend mutation
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
  // const [modal, setModal] = useState(false)
    
  return (
    <div>
      <section className = "hero">
       <MainNavBar />
      {/* This button is given for showing the form */}
      {/* <button className="button is-medium" style={{margin:"auto",width:"400px",backgroundColor:"#CF426C",color:"white",textAlign:"center"}} onClick={handleClick}>
        CLICK TO ENTER FLOWER POST
      </button> */}
      <br></br>
      
      {/* <Modal text= {"Hello this is message"}/> */}
      {/* <Modal mutation = {ADD_FLOWER_POST} text= {"Hello this is message"}/> */}
      <Modal mutation = {ADD_FLOWER_POST}/>
      <Query query={APOLLO_QUERY}>
        {({ data, loading, error }) => {
          if (loading) return <span>Loading...</span>
          if (error) return <p>{error.message}</p>
          return (
            <div>
              
              {Array.from(
                data.flowerposts.map(el => (
                  <Format bodyStyle="line-clamp" title ={el.title} date={el.date} imageUrl={el.imageUrl} body={el.body} />
                   
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
