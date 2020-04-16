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
import "../components/style.css"
import gql from "graphql-tag"
import  {Format} from "../components/format.js"


const APOLLO_QUERY = gql`
  {
    placeposts {
      imageUrl
      date
      title
      body
    }
  }
`
const ADD_PLACE_POST = gql`
  mutation($imageUrl: String, $title: String, $body: String) {
    createPlacePost(imageUrl: $imageUrl, title: $title, body: $body) {
      imageUrl
      title
      body
    }
  }
`
const PlacesPage = () => {
 

  return (
    <div>
      <MainNavBar />
        <Modal mutation = {ADD_PLACE_POST}/>
      <Query query={APOLLO_QUERY}>
        {({ data, loading, error }) => {
          if (loading) return <span>Loading...</span>
          if (error) return <p>{error.message}</p>
          return (
            <div>
                {Array.from(
                data.placeposts.map(el => (
                  <Format bodyStyle="line-clamp" title ={el.title} date={el.date} imageUrl={el.imageUrl} body={el.body} />   
                   
                ))
              ).reverse()}
            </div>
          )
          //    this for return in query
          // this curly braces for data,loadin
        }}
      </Query>
     </div>
  )
  // outer paranthesis for main return
}
// curly braces for flowerpage

export default PlacesPage
