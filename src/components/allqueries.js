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


// This is also original place query which will not be used
//  export const PLACES_QUERY = gql`
//  {
//    placeposts {
//      imageUrl
//      date
//      title
//      body
//    }
//  }
// ` 

export  const TOTAL_QUERY = gql`
query($pageNumber:Int,$pageSize:Int){
   getTotalPages(pageNumber:$pageNumber,pageSize:$pageSize)

}
`
export const PAGED_PLACES_QUERY = gql`
query($pageNumber:Int,$pageSize:Int){
       allplaceposts(pageNumber:$pageNumber,pageSize:$pageSize){
           imageUrl
           title
           date
            body
          }
}
 `
export const TOTAL_PLACES_QUERY = gql`
query($pageNumber:Int,$pageSize:Int){
   getPlacesTotalPages(pageNumber:$pageNumber,pageSize:$pageSize)

}
`
export const PAGED_FLOWERS_QUERY = gql`
query($pageNumber:Int,$pageSize:Int){
       allflowerposts(pageNumber:$pageNumber,pageSize:$pageSize){
           imageUrl
           title
           date
            body
          }
}
 `
export const TOTAL_FLOWERS_QUERY = gql`
query($pageNumber:Int,$pageSize:Int){
   getFlowersTotalPages(pageNumber:$pageNumber,pageSize:$pageSize)

}
`
export const PAGED_FRUITS_QUERY = gql`
query($pageNumber:Int,$pageSize:Int){
       allfruitposts(pageNumber:$pageNumber,pageSize:$pageSize){
           imageUrl
           title
           date
            body
          }
}
 `
export const TOTAL_FRUITS_QUERY = gql`
query($pageNumber:Int,$pageSize:Int){
   getFruitsTotalPages(pageNumber:$pageNumber,pageSize:$pageSize)

}
`