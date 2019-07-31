const graphql = require("graphql");
const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLID, GraphQLList, GraphQLInputObjectType } = graphql;
const isEqual = require("lodash/isEqual");
// const mongoose = require("mongoose");
// const Url = mongoose.model("urls") 

const UrlType = require("../schema/types/url_type");
const PinType = require("../schema/types/pin_type");
const BinType = require("../schema/types/bin_type");
const UserType = require("../schema/types/user_type");
const AuthService = require("../services/auth");

const UrlInput = require("../schema/inputs/url_input");

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
      resolve(_, args) { return AuthService.verifyUser(args) }
    },

    newUrl: {
      type: UrlType,
      args: { 
        link: { type: GraphQLString }
      },
      resolve(_, { link }) {
        return new Url({ link }).save();
      }
    },

    newPin: {
      type: PinType,
      args: {
        url: { type: GraphQLID },
        title: { type: GraphQLString },
        description: { type: GraphQLString},
        tags: { type: GraphQLList(GraphQLString) },
        created_by: { type: GraphQLID }
      },
      async resolve(_, { url, title, description, tags, created_by }) {
        return new Url({ link: url, created_by: created_by })
          .save()
          .then(URL => {
            return new Pin({ url: URL._id, title, description, tags }).save()
              .then(pin => {
                User.addPin(created_by, pin._id).exec();
                return pin;
              })
          });
      }
    },

    updatePin: {
      type: PinType,
      args: {
        _id: { type: GraphQLID },
        url: { type: UrlInput },
        title: { type: GraphQLString },
        description: { type: GraphQLString },
        tags: { type: GraphQLList(GraphQLString) }
      },
      resolve(_, { _id, url, title, description, tags }) {
        return Url.findById(url._id)
          .then(urlObj => {
            if (urlObj.link !== url.link) {
              urlObj.link = url.link;
              urlObj.save();
            }
          })
          .then(_ => 
            Pin.findByIdAndUpdate(
              _id,
              {title, description, tags},
              {new: true}
            )
          )
      }
    },
    
    deletePin: {
      type: PinType,
      args: { 
        _id: { type: GraphQLID },
        userId: { type: GraphQLID }
      },
      resolve(_, { _id, userId }) {
        return Pin.findByIdAndDelete(_id)
          .then(pin => { 
              Url.lessBoring(pin.url._id).exec();
              User.removePin(userId, pin._id).exec();
              return pin;
           })
      }
    },

    copyPin: {
      type: PinType,
      args: {
        url: { type: GraphQLID },
        title: { type: GraphQLString },
        description: { type: GraphQLString },
        tags: { type: GraphQLList(GraphQLString) },
        userId: { type: GraphQLID }
      },
      resolve(_, { url, title, description, tags, userId }) {
        return new Pin({ url, title, description, tags })
          .save()
          .then(pin => {
            Url.moreBoring(pin.url).exec();
            User.addPin(userId, pin._id).exec();
            return pin;
          })
      }
    },

    newBin: {
      type: BinType,
      args: {
        title: { type: GraphQLString },
        description: { type: GraphQLString },
        tags: { type: GraphQLList(GraphQLString) },
        pins: { type: GraphQLList(GraphQLID) },
        userId: { type: GraphQLID }
      },
      resolve(_, { title, description, tags, pins, userId }) {
        return new Bin({ title, description, tags, pins })
          .save()
          .then(bin => {
            User.addBin(userId, bin._id).exec();
            return bin;
          });
      }
    },

    deleteBin: {
      type: BinType,
      args: { 
        _id: { type: GraphQLID },
        userId: { type: GraphQLID }
      },
      resolve(_, { _id, userId }) {
        return Bin.findByIdAndDelete(_id)
          .then(bin => {
            User.removeBin(userId, bin._id).exec();
            return bin;
          });
      }
    }

  }
});



module.exports = mutations;