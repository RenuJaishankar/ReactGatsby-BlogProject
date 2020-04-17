import React, { useState } from "react"
import ReactModal from "react-modal"
import { Query } from "react-apollo"
import { Format } from "../components/Format"
import gql from "graphql-tag"

const PAGED_QUERY = gql`
query($pageNumber:Int,$pageSize:Int){
  allposts(pageNumber:$pageNumber,pageSize:$pageSize){
           title
           date
            body
          }
}
`
const TOTAL_QUERY = gql`
query($pageNumber:Int,$pageSize:Int){
   getTotalPages(pageNumber:$pageNumber,pageSize:$pageSize)

}
`

const Postquery = () {
// state for pages
const[page,setPage] = useState({pageNumber:0,pageSize:5})
// event listener that will change the current page state, altering the query

const handleClick = event =>{
    const currentPage = event.target.innerHTML
    console.log(currentPage)
    setPage({pageNumber:currentPage,pageSize:5})
}




}