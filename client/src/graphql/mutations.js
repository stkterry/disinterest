import gql from "graphql-tag";

const pinReturn = `
  _id,
  url {
    _id,
    link,
    snores,
    created_by
  },
  title,
  description,
  tags`;

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
      loggedIn,
      currentUser
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
  }`,

  CREATE_PIN: gql`
  mutation CreatePin($url: String, $title: String, $description: String, $tags: [String], $created_by: ID!) {
    newPin(url: $url, title: $tile, description: $description, tags: $tags, created_by: $created_by) {
      _id,
      url {
        _id,
        link,
        snores,
        created_by
      },
      title,
      description,
      tags
    }
  }`,

  UPDATE_PIN: gql`
  mutation UpdatePin($_id: String, $url: Object, $title: String, $description: String, $tags: Array) {
    updatePin(_id: $_id, url: $url, title: $title, description: $description, tags: $tags) {
      _id,
      url {
        _id,
        link,
        snores,
        created_by
      },
      title,
      description,
      tags
    }
  }`,

  DELETE_PIN: gql`
  mutation DeletePin($_id: String, $userId: String) {
    deletePin(_id: $_id, userId: $userId) {
      _id
    }
  }`,

  COPY_PIN: gql`
  mutation CopyPin($url: String, $title: String, $description: String, $tags: Array, $userId: String) {
    copyPin(url: $url, title: $tile, description: $description, tags: $tags, userId: $userId) {
      _id,
      url {
        _id,
        link,
        snores,
        created_by
      },
      title,
      description,
      tags
    }
  }`,

  CREATE_BIN: gql`
  mutation CreateBin($title: String, $description: String, $tags: Array, $pins: Array) {
    newBin(title: $title, description: $description, tags: $tags, pins: $pins) {
      _id,
      title,
      description,
      tags,
      pins
    }
  }`,

  DELETE_BIN: gql`
  mutation DeleteBin($_id: String, $userId: String) {
    deleteBin(_id: $id, userId: $userId) {
      _id
    }
  }`

}