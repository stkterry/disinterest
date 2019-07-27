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

}

