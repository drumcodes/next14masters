/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query CategoriesGetList {\n  categories {\n    data {\n      name\n      id\n      slug\n      products {\n        name\n        images {\n          url\n          alt\n        }\n      }\n    }\n  }\n}": types.CategoriesGetListDocument,
    "fragment CategoryListItemFragment on Category {\n  name\n  id\n  slug\n  products {\n    name\n    images {\n      url\n      alt\n    }\n  }\n}": types.CategoryListItemFragmentFragmentDoc,
    "fragment CollectionListItemFragment on Collection {\n  name\n  id\n  slug\n  products {\n    name\n    images {\n      url\n      alt\n    }\n  }\n}": types.CollectionListItemFragmentFragmentDoc,
    "query CollectionsGetList {\n  collections {\n    data {\n      name\n      id\n      slug\n      products {\n        name\n        images {\n          url\n          alt\n        }\n      }\n    }\n  }\n}": types.CollectionsGetListDocument,
    "query ProductGet($id: ID!) {\n  product(id: $id) {\n    ...ProductListItemFragment\n  }\n}": types.ProductGetDocument,
    "fragment ProductListFragment on Query {\n  products {\n    data {\n      ...ProductListItemFragment\n    }\n  }\n}": types.ProductListFragmentFragmentDoc,
    "fragment ProductListItemFragment on Product {\n  id\n  slug\n  name\n  price\n  description\n  images {\n    url\n    alt\n  }\n  categories {\n    name\n  }\n}": types.ProductListItemFragmentFragmentDoc,
    "query ProductsGetByCategorySlug($slug: String!) {\n  category(slug: $slug) {\n    name\n    slug\n    products {\n      ...ProductListItemFragment\n    }\n  }\n}": types.ProductsGetByCategorySlugDocument,
    "query ProductsGetByCollectionSlug($slug: String!) {\n  collection(slug: $slug) {\n    name\n    slug\n    products {\n      ...ProductListItemFragment\n    }\n  }\n}": types.ProductsGetByCollectionSlugDocument,
    "query ProductsGetList {\n  products(take: 50) {\n    data {\n      ...ProductListItemFragment\n    }\n  }\n}": types.ProductsGetListDocument,
    "query ProductsSearch($search: String!) {\n  products(search: $search) {\n    data {\n      ...ProductListItemFragment\n    }\n  }\n}": types.ProductsSearchDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoriesGetList {\n  categories {\n    data {\n      name\n      id\n      slug\n      products {\n        name\n        images {\n          url\n          alt\n        }\n      }\n    }\n  }\n}"): typeof import('./graphql').CategoriesGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CategoryListItemFragment on Category {\n  name\n  id\n  slug\n  products {\n    name\n    images {\n      url\n      alt\n    }\n  }\n}"): typeof import('./graphql').CategoryListItemFragmentFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CollectionListItemFragment on Collection {\n  name\n  id\n  slug\n  products {\n    name\n    images {\n      url\n      alt\n    }\n  }\n}"): typeof import('./graphql').CollectionListItemFragmentFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionsGetList {\n  collections {\n    data {\n      name\n      id\n      slug\n      products {\n        name\n        images {\n          url\n          alt\n        }\n      }\n    }\n  }\n}"): typeof import('./graphql').CollectionsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGet($id: ID!) {\n  product(id: $id) {\n    ...ProductListItemFragment\n  }\n}"): typeof import('./graphql').ProductGetDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductListFragment on Query {\n  products {\n    data {\n      ...ProductListItemFragment\n    }\n  }\n}"): typeof import('./graphql').ProductListFragmentFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductListItemFragment on Product {\n  id\n  slug\n  name\n  price\n  description\n  images {\n    url\n    alt\n  }\n  categories {\n    name\n  }\n}"): typeof import('./graphql').ProductListItemFragmentFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByCategorySlug($slug: String!) {\n  category(slug: $slug) {\n    name\n    slug\n    products {\n      ...ProductListItemFragment\n    }\n  }\n}"): typeof import('./graphql').ProductsGetByCategorySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByCollectionSlug($slug: String!) {\n  collection(slug: $slug) {\n    name\n    slug\n    products {\n      ...ProductListItemFragment\n    }\n  }\n}"): typeof import('./graphql').ProductsGetByCollectionSlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetList {\n  products(take: 50) {\n    data {\n      ...ProductListItemFragment\n    }\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsSearch($search: String!) {\n  products(search: $search) {\n    data {\n      ...ProductListItemFragment\n    }\n  }\n}"): typeof import('./graphql').ProductsSearchDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
