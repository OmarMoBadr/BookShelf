import { Link } from "react-router-dom";
import Book from "./Book";

const Shelf = ({ books, updateShelf }) => {
  return (
    <div className="list-books">
      <div className="list-books-content">
        <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {books
                  .filter((book) => book.shelf === "currentlyReading")
                  .map((book) => {
                    return (
                      <Book
                        book={book}
                        updateShelf={updateShelf}
                        key={book.id}
                        highlight={true}
                      />
                    );
                  })}
              </ol>
            </div>
            <h2 className="bookshelf-title">Want To Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {books
                  .filter((book) => book.shelf === "wantToRead")
                  .map((book) => {
                    return (
                      <Book
                        book={book}
                        updateShelf={updateShelf}
                        key={book.id}
                        highlight={true}
                      />
                    );
                  })}
              </ol>
            </div>
            <h2 className="bookshelf-title">Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {books
                  .filter((book) => book.shelf === "read")
                  .map((book) => {
                    return (
                      <Book
                        book={book}
                        updateShelf={updateShelf}
                        key={book.id}
                        highlight={true}
                      />
                    );
                  })}
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};

export default Shelf;
