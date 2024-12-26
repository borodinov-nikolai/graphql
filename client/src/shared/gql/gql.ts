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
    "\n    mutation createProduct($input: CreateProductInput!){\n        createProduct(createProductInput: $input) {\n            id\n            name\n            description\n            price\n        }\n    }\n    ": types.CreateProductDocument,
    "\n    mutation updateProduct($input: UpdateProductInput!){\n        updateProduct(updateProductInput: $input) {\n            id\n            name\n            description\n            price\n        }\n    }\n    ": types.UpdateProductDocument,
    "\n    query getProducts($params: Params) {\n        products(params: $params) {\n            id\n            name\n            description\n            price\n        }\n    }\n    ": types.GetProductsDocument,
    "\n        query getProduct($id: Int!) {\n            product(id: $id) {\n                id\n                name\n                description\n                price\n            }\n        }\n        ": types.GetProductDocument,
    "\n    mutation removeProduct($id: Int!) {\n        removeProduct(id: $id) {\n            id\n            name\n        }\n    }\n    ": types.RemoveProductDocument,
    "\n    query getUsers {\n        users {\n            id\n            name\n            password\n        }\n    }\n": types.GetUsersDocument,
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
export function graphql(source: "\n    mutation createProduct($input: CreateProductInput!){\n        createProduct(createProductInput: $input) {\n            id\n            name\n            description\n            price\n        }\n    }\n    "): (typeof documents)["\n    mutation createProduct($input: CreateProductInput!){\n        createProduct(createProductInput: $input) {\n            id\n            name\n            description\n            price\n        }\n    }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation updateProduct($input: UpdateProductInput!){\n        updateProduct(updateProductInput: $input) {\n            id\n            name\n            description\n            price\n        }\n    }\n    "): (typeof documents)["\n    mutation updateProduct($input: UpdateProductInput!){\n        updateProduct(updateProductInput: $input) {\n            id\n            name\n            description\n            price\n        }\n    }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query getProducts($params: Params) {\n        products(params: $params) {\n            id\n            name\n            description\n            price\n        }\n    }\n    "): (typeof documents)["\n    query getProducts($params: Params) {\n        products(params: $params) {\n            id\n            name\n            description\n            price\n        }\n    }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n        query getProduct($id: Int!) {\n            product(id: $id) {\n                id\n                name\n                description\n                price\n            }\n        }\n        "): (typeof documents)["\n        query getProduct($id: Int!) {\n            product(id: $id) {\n                id\n                name\n                description\n                price\n            }\n        }\n        "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation removeProduct($id: Int!) {\n        removeProduct(id: $id) {\n            id\n            name\n        }\n    }\n    "): (typeof documents)["\n    mutation removeProduct($id: Int!) {\n        removeProduct(id: $id) {\n            id\n            name\n        }\n    }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query getUsers {\n        users {\n            id\n            name\n            password\n        }\n    }\n"): (typeof documents)["\n    query getUsers {\n        users {\n            id\n            name\n            password\n        }\n    }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;