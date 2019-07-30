const mongoose = require("mongoose");
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = graphql;

const Pin = mongoose.model("pins");
const PinType = new GraphQLObjectType({
  name: "PinType",

  fields: () => ({
    _id: { type: GraphQLID },
    url: { 
      type: require("./url_type"),
      resolve(parentValue) {
        return Pin.getUrl(parentValue._id)
      }
    },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    tags: { type: GraphQLList }
  })
});

module.exports = PinType;