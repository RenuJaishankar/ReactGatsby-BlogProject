import React, { useState } from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import { useMutation } from "@apollo/react-hooks"
import "bulma/css/bulma.css"
import Layout from "../components/layout"
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

const PostPage = () => {
  return (
    <div>
      <Query query={APOLLO_QUERY}>
        {({ data, loading, error }) => {
          if (loading) return <span>Loading...</span>
          if (error) return <p>{error.message}</p>

          return (
            <div>
              {/* simple map higher order function that will render all of our games */}
              {data.posts.map(el => (
                <div
                  className="container"
                  style={{
                    backgroundColor: "Lavender",
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
                  <div>
                    <div
                      className="title"
                      
                    >
                      <span
                     
                      >{el.title}</span>
                      {el.date}
                    
                    </div>
                    
                     
                    
                  </div>
                  <div>{el.body}</div>
                </div>
              ))}
            </div>
          )
        }}
      </Query>
    </div>
  )
}
export default PostPage
