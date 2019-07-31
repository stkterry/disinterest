const mongoose = require("mongoose");
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt } = graphql;

const UrlType = new GraphQLObjectType({
  name: "UrlType",
  fields: () => ({
    _id: { type: GraphQLID },
    link: { type: GraphQLString },
    snores: { type: GraphQLInt },
    created_by: {type: GraphQLID }
  })
});

module.exports = UrlType;