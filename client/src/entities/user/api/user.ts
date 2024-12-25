import { graphql } from "@/shared/gql";



export const GET_USERS = graphql(`
    query getUsers {
        users {
            id
            name
            password
        }
    }
`)

