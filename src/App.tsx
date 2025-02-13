import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Listings from "./pages/Listings/idnex";
import CreateListing from "./pages/CreateListing";
import User from "./pages/User";
import Header from "./Header.js";
import Cart from "./pages/Cart/index.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Outlet />
            </>
            // <div className="container">
            //   <Outlet />
            // </div>
          }
        >
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="listings" element={<Listings />} />
          <Route path="createListing" element={<CreateListing />} />
          <Route path="user" element={<User />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
