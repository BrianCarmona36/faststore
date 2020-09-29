/**
 * Warning: This is an autogenerated file.
 *
 * Changes in this file won't take effect and will be overwritten
 */

// Base Types
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
type Maybe<T> = T | null | undefined
type Scalars = {
  Boolean: boolean
  String: string
  Float: number
  Int: number
}

// Operation related types
export type ProductPageQueryQueryVariables = Exact<{
  slug: Maybe<Scalars['String']>
  staticPath: Scalars['Boolean']
}>

export type ProductPageQueryQuery = {
  vtex: {
    product: Maybe<{
      productReference: Maybe<string>
      productName: Maybe<string>
      linkText: Maybe<string>
      productId: Maybe<string>
      description: Maybe<string>
      items: Maybe<
        Array<
          Maybe<{
            itemId: Maybe<string>
            images: Maybe<
              Array<
                Maybe<{ imageUrl: Maybe<string>; imageText: Maybe<string> }>
              >
            >
          }>
        >
      >
      productClusters: Maybe<Array<Maybe<{ name: Maybe<string> }>>>
      categoryTree: Maybe<
        Array<Maybe<{ name: Maybe<string>; href: Maybe<string> }>>
      >
    }>
  }
}

// Query Related Code

export const ProductPageQuery = {
  query:
    'query ProductPageQuery($slug: String, $staticPath: Boolean!) {\n  vtex {\n    product(slug: $slug) @include(if: $staticPath) {\n      productReference\n      productName\n      linkText\n      items {\n        images {\n          imageUrl\n          imageText\n        }\n        itemId\n      }\n      productClusters {\n        name\n      }\n      productId\n      description\n      categoryTree {\n        name\n        href\n      }\n    }\n  }\n}\n',
  sha256Hash:
    '3f01910dd0ff42573bc8ff83b031ccccadd2bda796e9b34e2109045c98a06c25',
  operationName: 'ProductPageQuery',
}
