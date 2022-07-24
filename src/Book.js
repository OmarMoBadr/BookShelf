import PropTypes from "prop-types";

const Book = ({ book, updateShelf, shelf, highlight }) => {
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 150,
              height: 230,
              backgroundImage: `url(${
                book.imageLinks && book.imageLinks.thumbnail
              })`,
            }}
          ></div>
          <div className={`book-shelf-changer ${highlight ? "highlight" : ""}`}>
            <select
              defaultValue={shelf ? shelf : book.shelf ? book.shelf : "none"}
              onChange={(e) => updateShelf(book, e.target.value)}
            >
              <option value="-" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">
          {book.authors && book.authors.join(", ")}
        </div>
      </div>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  updateShelf: PropTypes.func.isRequired,
  shelf: PropTypes.string,
  highlight: PropTypes.bool,
};

export default Book;
