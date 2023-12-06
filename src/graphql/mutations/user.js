import { GraphQLInt, GraphQLString } from "graphql";
import { UserType } from "../typeDefs/userType.js";
import Users from '../../models/user.js';
import { statusType } from "../typeDefs/statusType.js";


export const CREATE_USER = {
    type: UserType,
    args: {
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLInt },
    },
    // resolve(parent, args) {
    //     console.log(args)

    //     const user = Users.create(args)
    //     return user
    // }
    resolve: async (parent, args, context) => {
        console.log(args)
        console.log(parent.Users)
        let data = await context()
        console.log(data)

        const user = await parent.Users.create(args)
        return user
    }
}

// UPDATE user
export const UPDATE_USER = {
    type: statusType,
    args: {
        userId: { type: GraphQLString },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLInt },
    },
    resolve: async (parent, args, context) => {
        console.log(args)
        const { email, phone, name, userId } = args
        console.log(parent.Users)
        let data = await context()
        console.log(data)

        const update = { email: email, phone: phone, name: name }

        await parent.Users.findByIdAndUpdate({ _id: userId }, update, { new: true })
        return {
            success: true,
            message: "Successfully updated",
            error: ''
        }
    }

    // mutation updateUser($userID:String,$name:String,$email:String){
    //     updateUser(userId:$userID,name:$name,email:$email){
    //       success,
    //       message,
    //     }
    //   }

    // query var
    //     {
    //         "userID": "65701002cd3979c4cb6dca27",
    //         "name": "Muhammad Talha",
    //         "email": "update@gmail.com"
    //       }
}
// DELETE USER 
export const DELETE_USER = {
    type: statusType,
    args: {
        userId: { type: GraphQLString },
    },
    resolve: async (parent, args, context) => {
        const { userId } = args

        await parent.Users.findByIdAndDelete({ _id: userId })
        return {
            success: true,
            message: "Successfully deleted",
            error: ''
        }
    }
}