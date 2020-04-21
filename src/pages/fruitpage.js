import React, { useState } from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import ReactModal from "react-modal"
import { useMutation } from "@apollo/react-hooks"
import MainNavBar from "../components/mainnavbar"
//import Layout from "../components/layout"
import Modal from "../components/modal"
import  {Format} from "../components/format"
import "bulma/css/bulma.css"
import { Query } from "react-apollo"
import gql from "graphql-tag"
import "../components/global.css"

const APOLLO_QUERY = gql`
  {
    fruitposts {
      imageUrl
      date
      title
      body
    }
  }
`
const ADD_FRUIT_POST = gql`
  mutation($imageUrl: String,$title: String, $body: String) {
    createFruitPost(imageUrl:$imageUrl,title: $title, body: $body) {
      imageUrl
      title
      date
      body
    }
  }
`
const FruitPage = () => {
 
  return (
    <div>
      <section className="hero">
      <MainNavBar />
      
      <Modal mutation = {ADD_FRUIT_POST}/>    
      <Query query={APOLLO_QUERY}>
        {({ data, loading, error }) => {
            if (loading) return <span>Loading...</span>
            if (error) return <p>{error.message}</p>
          return (
            <div>
               
               {Array.from (
                  data.fruitposts.map(el => (
                    <Format bodyStyle="line-clamp" title ={el.title} date={el.date} imageUrl={el.imageUrl} body={el.body} />
                  ))
                )
                .reverse()}
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


export default FruitPage