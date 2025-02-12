import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Listings from "./pages/Listings/idnex";

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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
