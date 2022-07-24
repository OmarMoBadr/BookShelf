import { Link } from "react-router-dom";
import Book from "./Book";

const Shelf = ({ books, updateShelf }) => {
  return (
    <div className="list-books">
      <div className="list-books-content">
        <div>
          <div className="bookshelf">
            {[
              { title: "Currently Reading", tag: "currentlyReading" },
              { title: "Want To Read", tag: "wantToRead" },
              { title: "Read", tag: "read" },
            ].map((sh) => {
              return (
                <div key={sh.tag}>
                  <h2 className="bookshelf-title">{sh.title}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {books
                        .filter((book) => book.shelf === sh.tag)
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
              );
            })}
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
