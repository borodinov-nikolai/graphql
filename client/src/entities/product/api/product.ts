import { graphql } from "@/shared/gql";




export const CREATE_PRODUCT = graphql(`
    mutation createProduct($input: CreateProductInput!){
        createProduct(createProductInput: $input) {
            id
            name
            description
            price
        }
    }
    `)

export const GET_PRODUCTS = graphql(`
    query getProducts {
        products {
            id
            name
            description
            price
        }
    }
    `)