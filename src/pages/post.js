import React, { useState } from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import { useMutation } from "@apollo/react-hooks"
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
                  <div>
                    <div>
                      <h2>{el.title}</h2>
                    </div>
                    <div>{el.date}</div>
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
