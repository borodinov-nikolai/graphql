/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
    "\n    mutation signUp($input: SignUpInput!) {\n        signUp(signUpInput: $input) {\n            jwt\n        }\n    }\n        ": types.SignUpDocument,
    "\n    mutation signIn($input: SignInInput!) {\n        signIn(signInInput: $input) {\n            jwt\n        }      \n    }\n        ": types.SignInDocument,
    "\n    mutation signOut {\n        signOut\n    }\n    ": types.SignOutDocument,
    "\n        mutation tokensRefresh {\n            tokensRefresh {\n                jwt\n            }\n        }\n        ": types.TokensRefreshDocument,
    "\n    mutation createProduct($input: CreateProductInput!) {\n        createProduct(createProductInput: $input) {\n            id,\n            name,\n            description,\n            price\n        }\n    }\n    ": types.CreateProductDocument,
    "\n    mutation updateProduct($input: UpdateProductInput!) {\n        updateProduct(updateProductInput: $input) {\n            id,\n            name,\n            description,\n            price\n        }\n    }\n    ": types.UpdateProductDocument,
    "\n    query getProducts($sort: sort) {\n        products(sort: $sort) {\n            id,\n            name,\n            description,\n            price\n        }\n    }\n    ": types.GetProductsDocument,
    "\n    query getProduct($input: Int!) {\n        product(id: $input) {\n            id,\n            name,\n            description,\n            price\n        }\n    }\n    ": types.GetProductDocument,
    "\n    mutation removeProduct($input: Int!) {\n       removeProduct(id: $input) {\n        id\n       }        \n    }\n    ": types.RemoveProductDocument,
    "\nmutation uploadFile($file: [Upload!]!) {\n    uploadFile(file: $file) \n}": types.UploadFileDocument,
    "\n        query getMe {\n            getMe {\n                id\n                login\n                email\n            }\n        }\n    ": types.GetMeDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation signUp($input: SignUpInput!) {\n        signUp(signUpInput: $input) {\n            jwt\n        }\n    }\n        "): (typeof documents)["\n    mutation signUp($input: SignUpInput!) {\n        signUp(signUpInput: $input) {\n            jwt\n        }\n    }\n        "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation signIn($input: SignInInput!) {\n        signIn(signInInput: $input) {\n            jwt\n        }      \n    }\n        "): (typeof documents)["\n    mutation signIn($input: SignInInput!) {\n        signIn(signInInput: $input) {\n            jwt\n        }      \n    }\n        "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation signOut {\n        signOut\n    }\n    "): (typeof documents)["\n    mutation signOut {\n        signOut\n    }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n        mutation tokensRefresh {\n            tokensRefresh {\n                jwt\n            }\n        }\n        "): (typeof documents)["\n        mutation tokensRefresh {\n            tokensRefresh {\n                jwt\n            }\n        }\n        "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation createProduct($input: CreateProductInput!) {\n        createProduct(createProductInput: $input) {\n            id,\n            name,\n            description,\n            price\n        }\n    }\n    "): (typeof documents)["\n    mutation createProduct($input: CreateProductInput!) {\n        createProduct(createProductInput: $input) {\n            id,\n            name,\n            description,\n            price\n        }\n    }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation updateProduct($input: UpdateProductInput!) {\n        updateProduct(updateProductInput: $input) {\n            id,\n            name,\n            description,\n            price\n        }\n    }\n    "): (typeof documents)["\n    mutation updateProduct($input: UpdateProductInput!) {\n        updateProduct(updateProductInput: $input) {\n            id,\n            name,\n            description,\n            price\n        }\n    }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query getProducts($sort: sort) {\n        products(sort: $sort) {\n            id,\n            name,\n            description,\n            price\n        }\n    }\n    "): (typeof documents)["\n    query getProducts($sort: sort) {\n        products(sort: $sort) {\n            id,\n            name,\n            description,\n            price\n        }\n    }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query getProduct($input: Int!) {\n        product(id: $input) {\n            id,\n            name,\n            description,\n            price\n        }\n    }\n    "): (typeof documents)["\n    query getProduct($input: Int!) {\n        product(id: $input) {\n            id,\n            name,\n            description,\n            price\n        }\n    }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation removeProduct($input: Int!) {\n       removeProduct(id: $input) {\n        id\n       }        \n    }\n    "): (typeof documents)["\n    mutation removeProduct($input: Int!) {\n       removeProduct(id: $input) {\n        id\n       }        \n    }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nmutation uploadFile($file: [Upload!]!) {\n    uploadFile(file: $file) \n}"): (typeof documents)["\nmutation uploadFile($file: [Upload!]!) {\n    uploadFile(file: $file) \n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n        query getMe {\n            getMe {\n                id\n                login\n                email\n            }\n        }\n    "): (typeof documents)["\n        query getMe {\n            getMe {\n                id\n                login\n                email\n            }\n        }\n    "];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;