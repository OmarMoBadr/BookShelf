import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import * as BookAPI from "./BooksAPI";
import Book from "./Book.js";

const SearchBar = ({ updateShelf, allBooks }) => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [ids, setIds] = useState([]);

  useEffect(() => {
    let active = true;

    if (search) {
      BookAPI.search(search).then((res) => {
        if (res.error) {
          setBooks([]);
        } else {
          if (active) {
            setBooks(
              res.filter((book) => {
                return book.imageLinks;
              })
            );
          }
        }
      });
    }

    return () => {
      active = false;
      setBooks([]);
    };
  }, [search]);

  useEffect(() => {
    const ids_ = allBooks.map((b) => {
      return b.id;
    });
    setIds(ids_);
  }, [books, allBooks]);

  return (
    <div className="search">
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title, author, or ISBN"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {books.map((book) => {
              if (ids.includes(book.id)) {
                return (
                  <Book
                    book={book}
                    updateShelf={updateShelf}
                    key={book.id}
                    highlight={true}
                    shelf={
                      allBooks.filter((b) => {
                        return b.id === book.id;
                      })[0].shelf
                    }
                  />
                );
              } else {
                return (
                  <Book book={book} updateShelf={updateShelf} key={book.id} />
                );
              }
            })}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
