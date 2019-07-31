import gql from "graphql-tag";

export default {
  LOGIN_USER: gql`
  mutation LoginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
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
  mutation RegisterUser($name: String, $email: String, $password: String) {
    register(name: $name, email: $email, password: $password) {
      name,
      email,
      token,
      loggedIn
    }
  }`,

  CREATE_PIN: gql`
  mutation CreatePin($url: String, $title: String, $description: String, $tags: Array) {
    newPin(url: $url, title: $tile, description: $description, tags: $tags) {
      _id,
      url {
        _id,
        link,
        snores
      },
      title,
      description,
      tags
    }
  }`,

  DELETE_PIN: gql`
  mutation DeletePin($_id: String) {
    deletePin(_id: $_id) {
      _id
    }
  }`,

  COPY_PIN: gql`
  mutation CopyPin($url: String, $title: String, $description: String, $tags: Array) {
    copyPin(url: $url, title: $tile, description: $description, tags: $tags) {
      _id,
      url {
        _id,
        link,
        snores
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
  mutation DeleteBin($_id: String) {
    deleteBin(_id: $id) {
      _id
    }
  }`

}

