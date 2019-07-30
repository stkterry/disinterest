const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;
// const mongoose = require("mongoose");

const UserType = require("../schema/types/user_type");
const AuthService = require("../services/auth");

const mutations = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    register: {
      type: UserType,
      args: {
        first_name: { type: GraphQLString },
        last_name: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve(_, args) {
        return AuthService.register(args);
      }
    },
    logout: {
      type: UserType,
      args: { _id: { type: GraphQLID } },
      resolve(_, args) { return AuthService.logout(args) }
    },
    login: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve(_, args) { return AuthService.login(args) }
    },
    verifyUser: {
      type: UserType,
      args: { token: { type: GraphQLString } },
      resolve(_, args) { 

        return AuthService.verifyUser(args) 
      }
    }
  }
});



module.exports = mutations;