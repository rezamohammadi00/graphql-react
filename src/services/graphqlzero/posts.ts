import { gql } from "graphql-request";
import { graphqlClient } from "./graphqlClient";

// Define your GraphQL query
const GET_USERS = gql`
  query ($options: PageQueryOptions) {
    posts(options: $options) {
      data {
        id
        title
      }
      meta {
        totalCount
      }
    }
  }
`;

// Create a fetch function
const fetchPosts = async () => {
  return await graphqlClient.request(GET_USERS);
};

export { fetchPosts };
