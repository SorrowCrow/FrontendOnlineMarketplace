import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Listings from "./pages/Listings/idnex";
import CreateListing from "./pages/CreateListing";
import User from "./pages/User";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          // element={
          //   <div className="container">
          //     <Outlet />
          //   </div>
          // }
        >
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="listings" element={<Listings />} />
          <Route path="createListing" element={<CreateListing />} />
          <Route path="user" element={<User />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
