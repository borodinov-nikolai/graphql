import { graphql } from "@/shared/gql";



export const SIGN_UP = graphql(`
    mutation signUp($input: SignUpInput!) {
        signUp(signUpInput: $input) {
            login,
            email,
            password
        }
    }
    `)