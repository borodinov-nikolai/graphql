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

export const UPDATE_PRODUCT = graphql(`
    mutation updateProduct($input: UpdateProductInput!){
        updateProduct(updateProductInput: $input) {
            id
            name
            description
            price
        }
    }
    `)

export const GET_PRODUCTS = graphql(`
    query getProducts($params: Params) {
        products(params: $params) {
            id
            name
            description
            price
        }
    }
    `)

    export const GET_PRODUCT = graphql(`
        query getProduct($id: Int!) {
            product(id: $id) {
                id
                name
                description
                price
            }
        }
        `)

 export const REMOVE_PRODUCT = graphql(`
    mutation removeProduct($id: Int!) {
        removeProduct(id: $id) {
            id
            name
        }
    }
    `)