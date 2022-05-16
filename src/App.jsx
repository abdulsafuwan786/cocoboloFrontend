import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux";

const AppWrapper = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/products/:category" element={<ProductList />} />
       <Route path="/product/:id" element={<Product />} />
       <Route path="/cart" element={<Cart />} />
       <Route path="/success" element={<Success />} />
       <Route path="/login" element={<Login />} />
       <Route path="/register" element={<Register />} />
    </Routes>
  );
};


const App = () => {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
};

export default App;

 /*     
        <Route path="/products/:category">
          {<ProductList />}
        </Route>
        <Route path="/product/:id">
          {<Product />}
        </Route>
        <Route path="/cart">
          {<Cart />}
        </Route>
        <Route path="/success">
         {<Success /> }
        </Route>
        <Route path="/login">
          {user ? <Redirect to="/" /> : <Login />
        
          </Route>
        <Route path="/register">
          {<Register />}
           {user ? <Redirect to="/" /> : <Register />} 
        </Route>
   */