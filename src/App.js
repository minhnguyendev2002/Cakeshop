import './App.css';
import Intro from './components/intro/intro';
import Shop from './pages/shop/shop';
import Cart from './pages/cart/cart';
import Account from './pages/account/account';
import Checkout from './pages/checkout/checkout';

function App() {
  return (
    <div className="App">

      <Intro 
          now="Shop"
          past="Home"
      />

      <Shop />

      <Cart />

      <Account />

      <Checkout />

    </div>
  );
}

export default App;
