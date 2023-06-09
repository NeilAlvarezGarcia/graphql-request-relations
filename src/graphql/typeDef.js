export const typeDefs = /* GraphQL */ `
  type Query {
    getAuthors: [Author]
    getBooks: [Book]
  }

  type Book {
    id: ID!
    title: String!
    author: Author!
    reviews: [Review]
  }

  type Author {
    id: ID!
    name: String!
    books: [Book]
  }

  type Review {
    id: ID!
    text: String!
    book: ID!
  }
`;
