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
import Postquery from "../components/postquery"
import "../components/global.css"
import {PAGED_FRUITS_QUERY,SIMPLE_QUERY,TOTAL_FRUITS_QUERY} from "../components/allqueries"

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
     
      <MainNavBar />
      
      <Modal mutation = {ADD_FRUIT_POST}/>    
      <Postquery sentQuery={PAGED_FRUITS_QUERY} senttotalQuery={TOTAL_FRUITS_QUERY}/>
    </div>
  )
  // outer paranthesis for main return
}
// curly braces for flowerpage


export default FruitPage