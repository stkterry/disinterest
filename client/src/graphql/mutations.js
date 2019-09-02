import gql from "graphql-tag";

// const pinReturn = `
//   _id,
//   url {
//     _id,
//     link,
//     snores,
//     created_by
//   },
//   title,
//   description,
//   tags`;

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
  mutation CreatePin($url: String, $title: String, $description: String, $tags: [String], $image_url: String, $created_by: ID!) {
    newPin(url: $url, title: $title, description: $description, tags: $tags, image_url: $image_url, created_by: $created_by) {
      _id,
      url {
        _id,
        link,
        snores,
        created_by
      },
      title,
      description,
      tags,
      image_url,
      author {
        _id
      }
    }
  }`,

  UPDATE_PIN: gql`
  mutation UpdatePin($_id: ID!, $url: UrlInput, $title: String, $description: String, $tags: [String], $image_url: String) {
    updatePin(_id: $_id, url: $url, title: $title, description: $description, tags: $tags, image_url: $image_url) {
      _id,
      url {
        _id,
        link,
        snores,
        created_by
      },
      title,
      description,
      tags,
      image_url
    }
  }`,

  DELETE_PIN: gql`
  mutation DeletePin($_id: String, $userId: String) {
    deletePin(_id: $_id, userId: $userId) {
      _id
    }
  }`,

  COPY_PIN: gql`
  mutation CopyPin($url: ID, $title: String, $description: String, $tags: [String], $image_url: String, $userId: ID) {
    copyPin(url: $url, title: $title, description: $description, tags: $tags, image_url: $image_url, userId: $userId) {
      _id,
      url {
        _id,
        link,
        snores,
        created_by
      },
      title,
      description,
      tags,
      author {
        _id
      }
    }
  }`,

  COPY_PIN_AND_ADD_TO_BIN: gql`
  mutation CopyPinAndAddToBin($url: ID, $title: String, $description: String, $tags: [String], $image_url: String, $userId: ID, $binId: ID) {
    copyPinAndAddToBin(url: $url, title: $title, description: $description, tags: $tags, image_url: $image_url, userId: $userId, binId: $binId) {
      _id,
      url {
        _id,
        link,
        snores,
        created_by
      },
      title,
      description,
      tags,
      author {
        _id
      }
    }
  }`,

  CREATE_BIN: gql`
  mutation CreateBin($title: String, $description: String, $tags: [String], $image_url: String, $userId: ID, $pins: [ID]) {
    newBin(title: $title, description: $description, tags: $tags, image_url: $image_url, userId: $userId, pins: $pins) {
      _id,
      title,
      description,
      tags,
      pins {
        _id,
        title,
        image_url
      }
    }
  }`,

  DELETE_BIN: gql`
  mutation DeleteBin($_id: String, $userId: String) {
    deleteBin(_id: $id, userId: $userId) {
      _id
    }
  }`,
  UPDATE_BIN: gql`
  mutation UpdateBin($_id: String, $title: String, $description: String, $tags: Array, $pins: Array, $image_url: String) {
    updateBin(_id: $_id, title: $title, description: $description, tags: $tags, pins: $pins, image_url: $image_url) {
      _id,
      title,
      description,
      tags,
      image_url,
      pins {
        _id,
        title,
        description,
        tags,
        author,
        image_url
      }
    }
  }`,

  ADD_PIN_TO_BIN: gql`
  mutation AddPinToBin($binId: ID, $pinId: ID) {
    addPinToBin(binId: $binId, pinId: $pinId) {
      _id,
      title,
      description,
      tags,
      pins {
        _id,
        title,
        image_url
      }
    }
  }`,

  ADD_PIN_TO_USER: gql`
  mutation AddPinToUser($userId: ID!, $pinId: ID!) {
    addPinToUser(userId: $userId, pinId: $pinId) {
      _id,
      title,
      description,
      tags
    }
  }`


}