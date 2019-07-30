import gql from "graphql-tag";

export default {
  LOGIN_USER: gql`
  mutation LoginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      _id,
    	first_name,
    	last_name,
      token,
      loggedIn
    }
  }`,

  VERIFY_USER: gql`
  mutation VerifyUser($token: String!) {
    verifyUser(token: $token) {
      loggedIn
    }
  }`,

  REGISTER_USER: gql`
  mutation RegisterUser($first_name: String, $last_name: String, $email: String, $password: String) {
    register(first_name: $first_name, last_name: $last_name, email: $email, password: $password) {
      _id,
      first_name,
      last_name,
      email,
      token,
      loggedIn
    }
  }`

}

