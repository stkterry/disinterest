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

  FETCH_USER: gql`
  query fetchUser($userId: ID!) {
    user(_id: $userId) {
      _id,
      first_name,
      last_name,
      email
    }
  }`,

  FETCH_USER_PINS: gql`
  query fetchUserPins($userId: ID!) {
    userPins(_id: $userId) {
      _id,
      url {
        link,
        snores,
        created_by
      },
      title,
      description,
      tags
    }
  }`,

  FETCH_USER_BINS: gql`
  query fetchUserBins($userId: ID!) {
    userBins(_id: $userId) {
      _id,
      title,
      description,
      tags,
      pins {
        _id,
        title
      }
    }
  }`,

  FETCH_USER_PIN: gql`
  query fetchUserPin($userId: ID!, $pinId: ID!) {
    userPin(userId: $userId, pinId: $pinId) {
      _id,
      url {
        _id,
        link,
        snores,
        created_by
      }
      title,
      description,
      tags
    }
  }`,

  FETCH_USER_BIN: gql`
  query fetchUserBin($userId: ID!, $binId: ID!) {
    userBin(userId: $userId, binId: $binId) {
      _id,
      title,
      description,
      tags,
      pins {
        _id,
        url {
          _id,
          link,
          snores,
          created_by
        }
        title,
        description,
        tags
      }
    }
  }`,

  FETCH_PINS: gql`
  query fetchPins {
      pins {
        _id,
        url {
          link,
          snores,
          created_by
        },
        title,
        description,
        tags
      }
  }`,

  FETCH_PIN: gql`
  query fetchPin($pinId: ID!) {
    pin(_id: $pinId) {
      _id,
      url {
        link,
        snores,
        created_by
      },
      title,
      description,
      tags 
    }
  }`,

  FETCH_BINS: gql`
  query fetchBins {
    bins {
      _id,
      title,
      description,
      pins {
        _id,
        url {
          link,
          snores,
          created_by
        },
        title,
        description,
        tags
      },
      tags
    }
  }`,

  IS_LOGGED_IN: gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }`,
}