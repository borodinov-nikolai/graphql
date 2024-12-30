import { graphql } from "@/shared/gql";



export const SIGN_UP = graphql(`
    mutation signUp($input: SignUpInput!) {
        signUp(signUpInput: $input) {
            jwt
        }
    }
        `)

export const SIGN_IN = graphql(`
    mutation signIn($input: SignInInput!) {
        signIn(signInInput: $input) {
            jwt
        }      
    }
        `)

export const TOKENS_REFRESH = graphql(`
        query tokensRefresh {
            tokensRefresh {
                jwt
            }
        }
        `)