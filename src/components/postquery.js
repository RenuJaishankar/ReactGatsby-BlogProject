import React, { useState } from "react"
import ReactModal from "react-modal"
import { Query } from "react-apollo"
import { Format } from "../components/Format"
import gql from "graphql-tag"

 const PAGED_QUERY = gql`
query($pageNumber:Int,$pageSize:Int){
  allposts(pageNumber:$pageNumber,pageSize:$pageSize){
           imageUrl
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

const Postquery = props => {
  // state for pages
  const [page, setPage] = useState({ pageNumber: 0, pageSize: 5 })
  // event listener that will change the current page state, altering the query

  const handleClick = event => {
    const currentPage = event.target.innerHTML
    console.log(currentPage)
    setPage({ pageNumber: currentPage, pageSize: 5 })
  }

  const handleNext = event => {
    console.log(page.pageNumber)
    setPage({pageNumber:page.pageNumber+1, pageSize: 5})
  }

  const handlePrevious = event => {
    console.log(page.pageNumber)
    if (page.pageNumber>0){
    setPage({pageNumber:page.pageNumber-1,pageSize:5})
    }
  }
  // TODO: handlePrevious

  let navArr = []

  const navBuilder = x => {
    for (let i = 0; i <= x-1; i++)
      navArr.push(i);
  }


  return (
    <div>
      {/* This query is for rendering the page */}
      <Query query={PAGED_QUERY} variables={page} >
        {({ data, loading, error }) => {
          if (loading) return <span>Loading...</span>
          if (error) return <p>{error.message}</p>
          return (
            <div>
              {
                data.allposts.map(el => (
                  <Format bodyStyle="line-clamp"
                    imageUrl={el.imageUrl}
                    title={el.title}
                    date={el.date}
                    body={el.body}
                  />
                ))
              }
            </div>
          )
        }}
      </Query>

      {/* This query is for rendering the page numbers */}
      <Query query={TOTAL_QUERY} variables={page} >
        {({ data, loading, error }) => {
          if (loading) return <span>Loading...</span>
          if (error) return <p>{error.message}</p>
          return (
            <div>
              {navBuilder(data.getTotalPages)}
              {console.log(navArr)}

              <ul>
                {/* {navArr.map(el => ( */}

                    {/* {el}  */}
                    <nav className="pagination" role="navigation" aria-label="pagination">
                      <a onClick={handlePrevious} className="pagination-previous" title="This is the first page" >Previous</a>
                      <a onClick={handleNext} className="pagination-next">Next page</a>
                      {navArr.map(el => (

                      <ul className="pagination-list">
                        <li>
                          <a onClick={handleClick} className="pagination-link " aria-label="Page 1" aria-current="page">{el}</a>
                        </li>
                        {/* <li>
                          <a className="pagination-link" aria-label="Goto page 2">2</a>
                        </li>
                        <li>
                          <a className="pagination-link" aria-label="Goto page 3">3</a>
                        </li> */}
                      </ul>
                       ))}
                    </nav>



                {/* ))} */}
              </ul>
            </div>

          )
        }}
      </Query>
    </div>

  )
}

export default Postquery