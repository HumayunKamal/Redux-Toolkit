import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartContainer from "./component/CartContainer";
import Model from "./component/Model";
import Navbar from "./component/Navbar";
import { calculateTotals, getCartItems } from "./features/cart/cartSlice";

function App() {
  const { cartItems, isLoading } = useSelector((state) => state.cart);
  const { isOpen } = useSelector((state) => state.model);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems, dispatch]);
  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch]);
  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <Fragment>
      {isOpen && <Model />}
      <Navbar />
      <CartContainer />
    </Fragment>
  );
}

export default App;
