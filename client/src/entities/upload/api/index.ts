import { graphql } from "@/shared/gql";



export const FILE_UPLOAD = graphql(`
mutation uploadFile($file: [Upload!]!) {
    uploadFile(file: $file) 
}`
)