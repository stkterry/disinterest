const mongoose = require("mongoose");
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull, GraphQLInt } = graphql;

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

    userPins: {
      type: new GraphQLList(PinType),
      args: { userId: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(_, args) {
        return User.findPins(args.userId);
      }
    },

    userPin: {
      type: PinType,
      args: {
        userId: {type: new GraphQLNonNull(GraphQLID) },
        pinId: { type: new GraphQLNonNull(GraphQLID) }
      },
      resolve(_, args) {
        return User.findPin(args.userId, args.pinId);
      }
    },

    userBin: {
      type: BinType,
      args: {
        userId: { type: new GraphQLNonNull(GraphQLID) },
        binId: { type: new GraphQLNonNull(GraphQLID) }
      },
      resolve(_, args) {
        return User.findPin(args.userId, args.binId);
      }
    },

    userBins: {
      type: new GraphQLList(BinType),
      args: { userId: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(_, args) { 
        return User.findBins(args.userId);
      }
    },

    pins: {
      type: new GraphQLList(PinType),
      resolve() {
        return Pin.find({})
      }
    },

    somePins: {
      type: new GraphQLList(PinType),
      args: {
        limit: { type: GraphQLInt },
        offset: { type: GraphQLInt }
      },
      resolve(_, args) {
        let { offset, limit } = args;
        offset = offset || 0;
        limit = limit || 10;
        return Pin.find({})
          .then(pins => pins.slice(offset, offset+limit))
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