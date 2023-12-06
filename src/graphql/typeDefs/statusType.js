import { GraphQLBoolean, GraphQLObjectType, GraphQLString } from "graphql";


export const statusType = new GraphQLObjectType({
    name: 'status',
    fields: () => ({
        success: { type: GraphQLBoolean },
        message: { type: GraphQLString },
        error: { type: GraphQLString },
    })
})