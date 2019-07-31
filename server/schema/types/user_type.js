const mongoose = require("mongoose");
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLBoolean, GraphQLList } = graphql;

const UserType = new GraphQLObjectType({
    name: "UserType",

    fields: () => ({
        _id: { type: GraphQLID },
        first_name: { type: GraphQLString },
        last_name: { type: GraphQLString },
        email: { type: GraphQLString },
        token: { type: GraphQLString },
        loggedIn: { type: GraphQLBoolean },
        pins: {
            type: new GraphQLList(require("./pin_type")),
            resolve(parentValue) {
                return User.findPins(parentValue._id)
            }
        }
    })
});

module.exports = UserType;