
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CreateProductInput {
    name: string;
    description: string;
    price: number;
}

export interface UpdateProductInput {
    id: number;
    name?: Nullable<string>;
    description?: Nullable<string>;
    price?: Nullable<number>;
}

export interface Params {
    sort?: Nullable<string>;
}

export interface CreateUserInput {
    name?: Nullable<string>;
}

export interface UpdateUserInput {
    name: string;
}

export interface Product {
    id?: Nullable<number>;
    name?: Nullable<string>;
    description?: Nullable<string>;
    price?: Nullable<number>;
}

export interface IQuery {
    products(params?: Nullable<Params>): Nullable<Product>[] | Promise<Nullable<Product>[]>;
    product(id: number): Nullable<Product> | Promise<Nullable<Product>>;
    users(): Nullable<User>[] | Promise<Nullable<User>[]>;
    user(id: number): Nullable<User> | Promise<Nullable<User>>;
}

export interface IMutation {
    createProduct(createProductInput: CreateProductInput): Product | Promise<Product>;
    updateProduct(updateProductInput: UpdateProductInput): Product | Promise<Product>;
    removeProduct(id: number): Nullable<Product> | Promise<Nullable<Product>>;
    createUser(createUserInput: CreateUserInput): User | Promise<User>;
    updateUser(updateUserInput: UpdateUserInput): User | Promise<User>;
    removeUser(id: number): Nullable<User> | Promise<Nullable<User>>;
}

export interface User {
    id?: Nullable<number>;
    name?: Nullable<string>;
    password?: Nullable<string>;
}

type Nullable<T> = T | null;
