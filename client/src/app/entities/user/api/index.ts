import { graphql } from "@/app/gql";



export const GET_USERS = graphql(`
    query getUsers {
        users {
            id
            name
        }
    }
`)