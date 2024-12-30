import { graphql } from "@/shared/gql";



export const CREATE_PRODUCT = graphql(`
    mutation createProduct($input: CreateProductInput) {
        createProduct(createProductInput: $input) {
            name,
            description,
            price
        }
    }
    `)

export const UPDATE_PRODUCT = graphql(`
    mutation updateProduct($input: UpdateProductInput) {
        updateProduct(updateProductInput: $input) {
            name,
            description,
            price
        }
    }
    `)

export const GET_PRODUCTS = graphql(`
    query getProducts {
        products {
            name,
            description,
            price
        }
    }
    `)

export const GET_PRODUCT = graphql(`
    query getProduct($input: Int!) {
        product(id: $input) {
            name,
            description,
            price
        }
    }
    `)

export const REMOVE_PRODUCT = graphql(`
    mutation removeProduct($input: Int!) {
       removeProduct(id: $input)        
    }
    `)