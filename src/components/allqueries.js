import React from "react"
import {useStaticQuery,graphql} from 'gatsby'
import gql from 'graphql-tag'

export const PAGED_QUERY = gql`
query($pageNumber:Int,$pageSize:Int){
       allposts(pageNumber:$pageNumber,pageSize:$pageSize){
           imageUrl
           title
           date
            body
          }
}
 `
export  const TOTAL_QUERY = gql`
query($pageNumber:Int,$pageSize:Int){
   getTotalPages(pageNumber:$pageNumber,pageSize:$pageSize)

}
`
// This query is the original query which is not used
export const SIMPLE_QUERY = gql`
  {
    posts {
      imageUrl
      date
      title
      body
    }
  }
`