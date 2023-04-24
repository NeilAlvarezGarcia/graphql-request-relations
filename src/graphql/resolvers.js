import { books } from "../db/books";
import { authors } from "../db/authors";
import { reviews } from "../db/reviews";

export const resolvers = {
  Query: {
    getBooks: () => books,
    getAuthors: () => authors,
  },
  Book: {
    author: ({ author }) => {
      return authors.find((a) => a.id === author);
    },
    reviews: ({ id }) => {
      return reviews.filter((review) => review.book === id);
    },
  },
  Author: {
    books: ({ id }) => {
      return books.filter((books) => books.author === id);
    },
  },
};
