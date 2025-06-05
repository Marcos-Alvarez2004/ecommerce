import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ProductDetail from './pages/ProductDetail';
import Home from "./pages/Home";
import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"
import Checkout from "./pages/Checkout"
import { useSelector } from "react-redux";
import PlaceOrder from "./pages/PlaceOrder.jsx";
import { OrderHistory } from "./pages/OrderHistory.jsx";
import OrderConfirmation from "./pages/OrderConfirm.jsx";

function App() {

  const userLoginReducer = useSelector((state) => state.userLoginReducer);
  const { userInfo } = userLoginReducer;
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/products/:id' element={<ProductDetail />}></Route>
          <Route exact path='/login' element={userInfo ? <Navigate to="/"></Navigate> : <Login />}></Route>
          <Route exact path='/register' element={userInfo ? <Navigate to="/"></Navigate> : <Register />}></Route>

          <Route exact path='/order/:id' element={<OrderConfirmation />}></Route>
          <Route exact path='/order-history' element=
            {<OrderHistory />}></Route>

          <Route exact path='/checkout' element={<Checkout />}></Route>
          <Route exact path='/placeorder' element={<PlaceOrder />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App;