import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import { AppProvider } from './context';
import './index.css';

import Home from './pages/Home/Home';
import About from "./pages/About/About";
import BookList from "./components/BookList/Booklist.jsx";
import BookDetails from "./components/BookDetails/BookDetails";
import Navbar from './components/Navbar/Navbar';
import SearchForm from './components/SearchForm/SearchForm';
import { Outlet } from 'react-router-dom';

import { useGlobalContext } from './context';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function MainLayout() {
  const { isSearchFocused, setIsSearchFocused } = useGlobalContext();
  const location = useLocation();
  const path = location.pathname;
  const isBookRoute = path.startsWith('/book');
  const isAboutRoute = path === '/about';

  // Reset search focus on route change to avoid stale state after refresh
  useEffect(() => {
    setIsSearchFocused(false);
  }, [location.pathname, setIsSearchFocused]);

  return (
    <>
      {!isAboutRoute && ((isBookRoute || !isSearchFocused) && <Navbar />)}
      {/* Always show SearchForm at top on /book and /book/:id routes, never on About */}
      {!isAboutRoute && isBookRoute && <SearchForm />}
      <Outlet />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="book" element={<BookList />} />
          <Route path="book/:id" element={<BookDetails />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </AppProvider>
);

