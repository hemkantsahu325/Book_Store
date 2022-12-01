import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AddBook from "./components/AddBook";
import Books from "./components/Book/Books";
import Users from "./components/User/Users";
import Order from "./components/order";

import About from "./components/About";
import Signin from "./components/signin";
import BookDetail from "./components/Book/BookDetail";
function App() {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/add" element={<AddBook />} exact />
          <Route path="/books" element={<Books />} exact />
          <Route path="/about" element={<About />} exact />
          <Route path="/books/:id" element={<BookDetail />} exact />
          <Route path="/signin" element={<Signin />} exact />
          <Route path="/books/user" element={<Users />} exact />
          <Route path="/order" element={<Order />} exact />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
