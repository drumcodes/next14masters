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
    "mutation CartAddItem($id: ID!, $input: MutationCartAddItemInput!) {\n  cartAddItem(id: $id, input: $input) {\n    id\n  }\n}": types.CartAddItemDocument,
    "mutation CartChangeItemQuantity($id: ID!, $productId: ID!, $quantity: Int!) {\n  cartChangeItemQuantity(id: $id, productId: $productId, quantity: $quantity) {\n    id\n    items {\n      quantity\n      product {\n        name\n        price\n      }\n    }\n  }\n}": types.CartChangeItemQuantityDocument,
    "mutation CartCreate($id: ID, $input: MutationCartFindOrCreateInput!) {\n  cartFindOrCreate(id: $id, input: $input) {\n    id\n    items {\n      product {\n        id\n        name\n        price\n      }\n      quantity\n    }\n  }\n}": types.CartCreateDocument,
    "query CartGetById($id: ID!) {\n  cart(id: $id) {\n    id\n    items {\n      product {\n        id\n        name\n        price\n      }\n      quantity\n    }\n  }\n}": types.CartGetByIdDocument,
    "mutation CartRemoveItem($id: ID!, $productId: ID!) {\n  cartRemoveItem(id: $id, productId: $productId) {\n    id\n  }\n}": types.CartRemoveItemDocument,
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
export function graphql(source: "mutation CartAddItem($id: ID!, $input: MutationCartAddItemInput!) {\n  cartAddItem(id: $id, input: $input) {\n    id\n  }\n}"): typeof import('./graphql').CartAddItemDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartChangeItemQuantity($id: ID!, $productId: ID!, $quantity: Int!) {\n  cartChangeItemQuantity(id: $id, productId: $productId, quantity: $quantity) {\n    id\n    items {\n      quantity\n      product {\n        name\n        price\n      }\n    }\n  }\n}"): typeof import('./graphql').CartChangeItemQuantityDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartCreate($id: ID, $input: MutationCartFindOrCreateInput!) {\n  cartFindOrCreate(id: $id, input: $input) {\n    id\n    items {\n      product {\n        id\n        name\n        price\n      }\n      quantity\n    }\n  }\n}"): typeof import('./graphql').CartCreateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CartGetById($id: ID!) {\n  cart(id: $id) {\n    id\n    items {\n      product {\n        id\n        name\n        price\n      }\n      quantity\n    }\n  }\n}"): typeof import('./graphql').CartGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartRemoveItem($id: ID!, $productId: ID!) {\n  cartRemoveItem(id: $id, productId: $productId) {\n    id\n  }\n}"): typeof import('./graphql').CartRemoveItemDocument;
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
