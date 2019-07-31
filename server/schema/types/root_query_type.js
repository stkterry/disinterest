const mongoose = require("mongoose");
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull } = graphql;

const UserType = require("./user_type");
const PinType = require("./pin_type");
const UrlType = require("./url_type");
const BinType = require("./bin_type");

const User = mongoose.model("users");
const Pin = mongoose.model("pins");
const Url = mongoose.model("urls");
const Bin = mongoose.model("bins");


const RootQueryType = new GraphQLObjectType({
  name: "RootQueryType",
  fields: () => ({
    users: {
      type: new GraphQLList(UserType),
      resolve() {
        return User.find({});
      }
    },
    user: {
      type: UserType,
      args: { _id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(_, args) {
        return User.findById(args._id);
      }
    },
    pins: {
      type: new GraphQLList(PinType),
      resolve() {
        return Pin.find({})
      }
    },
    pin: {
      type: PinType,
      args: { _id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(_, args) {
        return Pin.findById(args._id)
      }
    },
    urls: {
      type: new GraphQLList(UrlType),
      resolve() {
        return Url.find({})
      }
    },
    url: {
      type: UrlType,
      args: { _id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(_, args) {
        return Url.findById(args._id)
      }
    },
    bins: {
      type: new GraphQLList(BinType),
      resolve() {
        return Bin.find({})
      }
    },
    bin: {
      type: BinType,
      args: { _id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(_, args) {
        return Bin.findById(args._id)
      }
    }
  })
});

module.exports = RootQueryType;