import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Navbar from "./components/Navbar";
import Store from "./components/Store";
import ShoppingCartProvider from "./context/ShoppingCartContext";
import "./App.css"
import ContactUs from "./components/ContactUs";
const App = () => {
  return (
    <ShoppingCartProvider>
      <Navbar  />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Store />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
    
  );
};

export default App;
