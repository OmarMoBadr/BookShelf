import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Shelf from "./Shelf";
import SearchBar from "./SearchBar";
import NotFound from "./NotFound";
import * as BooksAPI from "./BooksAPI";

function App() {
  const [books, setBooks] = useState([]);

  const updateShelf = (b, s) => {
    const allBut = books.filter((book) => {
      return book !== b;
    });
    b.shelf = s;
    setBooks([...allBut, b]);

    BooksAPI.update(b, s);
  };

  useEffect(() => {
    const f = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
    };

    f();
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route
          path="/search"
          element={<SearchBar updateShelf={updateShelf} allBooks={books} />}
        />
        <Route
          exact
          path="/"
          element={<Shelf books={books} updateShelf={updateShelf} />}
        />
      </Routes>
    </div>
  );
}

export default App;
