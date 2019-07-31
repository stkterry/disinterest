const mongoose = require("mongoose");
const graphql = require("graphql");
const { GraphQLInputObjectType, GraphQLString, GraphQLID, GraphQLInt } = graphql;

const UrlInput = new GraphQLInputObjectType({
  name: "UrlInput",
  fields: () => ({
    _id: { type: GraphQLID },
    link: { type: GraphQLString },
    snores: { type: GraphQLInt },
    created_by: { type: GraphQLID }
  })
});

module.exports = UrlInput;