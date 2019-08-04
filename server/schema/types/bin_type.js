const mongoose = require("mongoose");
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = graphql;

const Bin = mongoose.model("bins");
const BinType = new GraphQLObjectType({
  name: "BinType",

  fields: () => ({
    _id: { type: GraphQLID },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    tags: { type: GraphQLList(GraphQLString) },
    pins: { 
      type: new GraphQLList(require("./pin_type")),
      resolve(parentValue) {
        return Bin.findPins(parentValue._id)
      }
    },
    image_url: { type: GraphQLString },
  })
});

module.exports = BinType;