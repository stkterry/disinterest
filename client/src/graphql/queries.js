import gql from "graphql-tag";

export default {
  FETCH_USERS: gql`
  {
    users {
      _id
      first_name,
      last_name,
      email
    }
  }`,

  IS_LOGGED_IN: gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }`,

  FETCH_USER: gql`
  query fetchUser($_id: ID!){
    user(_id: $_id) {
      _id
      first_name,
      last_name,
      email
    }
  }`

}

// FETCH_PRODUCT: gql`
//     query fetchProduct($productId: ID!) {
//       product(_id: $productId) {
//         _id
//         name
//         cost
//         description
//         weight
//         category {
//           name
//         }
//       }
//     }
//   `