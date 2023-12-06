import { GraphQLInt, GraphQLObjectType, GraphQLString } from "graphql";



export const UserType = new GraphQLObjectType({
    name: 'user',
    fields: () => ({
        _id: { type: GraphQLString },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLInt },
    })
})