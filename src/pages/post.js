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
              src="https://images.all-free-download.com/images/graphicthumb/tulip_garden_stock_photo_166692.jpg"
              height="400px"
              width="400px"
            />
          </div>
          <div className="column">
            <img
              src="https://images.pexels.com/photos/39517/rose-flower-blossom-bloom-39517.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              height="300px"
              width="400px"
            />
          </div>
        </div>
        <div className="columns">
          <div className="column">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTGJNHoK3OEh8kbO5v1NgUzvZQw3mS-4Lp2yyV5oc2b4aIGXunn&usqp=CAU" height ="400px" width ="400px" />
                 
          </div>
          <div className="column">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSaVh0J4EI_HFuNaYzyI0JBAAdf59ngc6GiAx-3en7I6u5wyPF0&usqp=CAU" height="400px" width= "400px"/>
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
