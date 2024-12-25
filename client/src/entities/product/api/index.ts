import { graphql } from "@/shared/gql";



export const createProduct = graphql(`
    mutation createProduct($type: {name: string!, description: string!, ptice: number!}){
        createProcuct
    }
    `)