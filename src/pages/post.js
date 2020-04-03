import React, { useState } from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import { useMutation } from "@apollo/react-hooks"
import "bulma/css/bulma.css"
import Layout from "../components/layout"
import MainNavBar from "../components/mainnavbar"
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
    //outer div
    <div>
      <MainNavBar />
      <div class="container">
        <div className="columns">
          <div className="column">
            <img
              src="https://www.thespruce.com/thmb/BRLLA0s3hjuaY4VDXWoja69OxK8=/3865x2174/smart/filters:no_upscale()/trio-of-vibrant-red-hibiscus-flowers-with-bright-yellow-stigma-growing-in-garden-pot-845218812-5abea591119fa80037eef63e.jpg"
              height="1000px"
              width="400px"
            />
          </div>
          <div className="column">
            <img
              src="https://i.pinimg.com/originals/77/b0/c1/77b0c1a8b5e8c23cf3deafe9d7f20e6c.jpg"
              height="200px"
              width="400px"
            />
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <img src="https://previews.123rf.com/images/ivantagan/ivantagan1602/ivantagan160200074/52552706-coconut-tree-with-fruits-coconuts-on-a-tropical-island-in-the-maldives-middle-part-of-the-indian-oce.jpg" height="400px" width= "400px"/>
              
          </div>
          <div className="column">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSExJYv2unJUKhXRBepOKbYobEOvLJJVf_lbsw9mlHFmZK8eiPG&usqp=CAU" height ="400px" width ="400px" />
          </div>
        </div>    
            
         
        
      </div>
      <Query query={APOLLO_QUERY}>
        {({ data, loading, error }) => {
          if (loading) return <span>Loading...</span>
          if (error) return <p>{error.message}</p>

          return (
            //inner div
            <div>
              {/* simple map higher order function that will render all of our games */}
              {data.posts.map(el => (
                //container div
                <div
                  className="container"
                  style={{
                    backgroundColor: "#fafafa",
                    fontFamily: "proxima-nova",
                
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
                    <div className="title">
                      <span style={{marginLeft:300, color: "#3b4b7f" }}>{el.title}</span>
                      <span
                        style={{
                          fontSize: "18px",
                          float:"right",
                          color: "#3b4b7f",
                        }}
                      >
                        {el.date}
                      </span>
                    </div>
                  </div>
                  
                  <div style={{ marginLeft: "150px", marginRight: "150px" }}>
                    {el.body}
                  </div>
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
