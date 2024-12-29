import { GraphQLClient } from "graphql-request";

const endpoint = import.meta.env.VITE_GRAPHQLZERO_ENDPOINT; // Replace with your API endpoint

// export const graphqlClient = new GraphQLClient(endpoint, {
//   headers: {
//     Authorization: 'Bearer YOUR_TOKEN', // Optional: Include any required headers
//   },
// });
export const graphqlClient = new GraphQLClient(endpoint);
