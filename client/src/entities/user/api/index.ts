import { graphql } from "@/shared/gql";



export const GET_USERS = graphql(`
    query getUsers {
        users {
            id
            name
        }
    }
`)

export const CREATE_USER = graphql(`
    mutation createUser($type: {name: String!, password: String!}) {
        addUser(type: $type) {
           name,
           password
        }
    }
    `)