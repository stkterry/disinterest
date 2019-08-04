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
    tags: { type: GraphQLList(GraphQLString) },
    image_url: { type: GraphQLString },
    author: { 
      type: require("./user_type"),
      resolve(parentValue) {
        return Pin.getAuthor(parentValue._id)
      }
     }
  })
});

module.exports = PinType;