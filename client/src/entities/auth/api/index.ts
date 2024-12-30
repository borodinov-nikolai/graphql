import { graphql } from "@/shared/gql";



export const SIGN_UP = graphql(`
    mutation signUp($input: SignUpInput!) {
        signUp(signUpInput: $input) {
            jwt
        }
    }
    `)

    export const REFRESH = graphql(`
        query refresh {
            refresh {
                jwt
            }
        }
        `)