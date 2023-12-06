import { GraphQLList, GraphQLString } from "graphql"
import { UserType } from "../typeDefs/userType.js"
import Users from '../../models/user.js';

// all user list
export const USER_LIST = {
    type: new GraphQLList(UserType),
    resolve(parent, args) {
        let data = Users.find()
        return data
    }

    // query{
    //     usreList{
    //       _id,
    //       name,
    //       email,
    //       phone
    //     }
    //   }
}

// single user 
export const SINGLE_USER = {
    // schema user type defined and set
    type: new GraphQLList(UserType),
    args: {
        userId: { type: GraphQLString }
    },

    // get single user
    resolve: async (parent, args) => {
        console.log(args.userId)
        let data = await parent.Users.find({ _id: args.userId });
        return data
    }

    // get query 
    // query singleUser($userID:String){
    //     singleUser(userId: $userID){
    //       _id,
    //       name,
    //       email,
    //       phone
    //     }
    //   }

    // query var
    // {
    //     "userID": "65701002cd3979c4cb6dca27"
    //   }
}