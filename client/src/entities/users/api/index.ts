import { graphql } from "@/shared/gql";



export const GET_ME = graphql(`
        query getMe {
            getMe {
                id
                login
                email
            }
        }
    `)