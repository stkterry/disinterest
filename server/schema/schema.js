const graphql = require("graphql");
const { GraphQLSchema } = graphql;

const query = require("./types/root_query_type");
const mutations = require("./mutations");

module.exports = new GraphQLSchema({
    query: query,
    mutation: mutations
});