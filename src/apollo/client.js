import ApolloClient from 'apollo-boost'
import fetch from 'isomorphic-fetch'
export const client = new ApolloClient({
uri:'https://banana-crumble-91508.herokuapp.com/graphql',
fetch,
})
