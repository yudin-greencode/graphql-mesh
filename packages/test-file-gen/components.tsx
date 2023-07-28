import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Book = {
  __typename?: 'Book';
  authorId: Scalars['String']['output'];
  categorieId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type Category = {
  __typename?: 'Category';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  /**
   *
   *
   * Equivalent to GET /books
   */
  books?: Maybe<Array<Maybe<Book>>>;
  /**
   *
   *
   * Equivalent to GET /categories
   */
  booksCategories?: Maybe<Array<Maybe<Category>>>;
};


export type QueryBooksArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryBooksCategoriesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
};

export type Books_QueryQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type Books_QueryQuery = { __typename?: 'Query', books?: Array<{ __typename?: 'Book', authorId: string, categorieId: string, id: string, title: string } | null> | null };

export type BooksCategories_QueryQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type BooksCategories_QueryQuery = { __typename?: 'Query', booksCategories?: Array<{ __typename?: 'Category', id: string, name: string } | null> | null };


export const Books_QueryDocument = gql`
    query books_query($limit: Int) {
  books(limit: $limit) {
    authorId
    categorieId
    id
    title
  }
}
    `;

/**
 * __useBooks_QueryQuery__
 *
 * To run a query within a React component, call `useBooks_QueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useBooks_QueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBooks_QueryQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useBooks_QueryQuery(baseOptions?: Apollo.QueryHookOptions<Books_QueryQuery, Books_QueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Books_QueryQuery, Books_QueryQueryVariables>(Books_QueryDocument, options);
      }
export function useBooks_QueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Books_QueryQuery, Books_QueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Books_QueryQuery, Books_QueryQueryVariables>(Books_QueryDocument, options);
        }
export type Books_QueryQueryHookResult = ReturnType<typeof useBooks_QueryQuery>;
export type Books_QueryLazyQueryHookResult = ReturnType<typeof useBooks_QueryLazyQuery>;
export type Books_QueryQueryResult = Apollo.QueryResult<Books_QueryQuery, Books_QueryQueryVariables>;
export const BooksCategories_QueryDocument = gql`
    query booksCategories_query($limit: Int) {
  booksCategories(limit: $limit) {
    id
    name
  }
}
    `;

/**
 * __useBooksCategories_QueryQuery__
 *
 * To run a query within a React component, call `useBooksCategories_QueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useBooksCategories_QueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBooksCategories_QueryQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useBooksCategories_QueryQuery(baseOptions?: Apollo.QueryHookOptions<BooksCategories_QueryQuery, BooksCategories_QueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BooksCategories_QueryQuery, BooksCategories_QueryQueryVariables>(BooksCategories_QueryDocument, options);
      }
export function useBooksCategories_QueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BooksCategories_QueryQuery, BooksCategories_QueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BooksCategories_QueryQuery, BooksCategories_QueryQueryVariables>(BooksCategories_QueryDocument, options);
        }
export type BooksCategories_QueryQueryHookResult = ReturnType<typeof useBooksCategories_QueryQuery>;
export type BooksCategories_QueryLazyQueryHookResult = ReturnType<typeof useBooksCategories_QueryLazyQuery>;
export type BooksCategories_QueryQueryResult = Apollo.QueryResult<BooksCategories_QueryQuery, BooksCategories_QueryQueryVariables>;