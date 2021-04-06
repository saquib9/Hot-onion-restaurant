import { createContext, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Cart from "./Components/Cart/Cart";
import Details from "./Components/Details/Details";
import Header from "./Components/Header/Header";
import Home from './Components/Home/Home';
import LinkNotFound from "./Components/LinkNotFound/LinkNotFound";
import LogIn from "./Components/LogIn/LogIn";
import OrderOnWay from "./Components/OrderOnWay/OrderOnWay";
import fakeData from "./fakeData/fakeData";
import { getDatabaseCart } from "./utilities/databaseManager";

export const Boss = createContext()

function App() {

const [cart, setCart] = useState([])
const [dbUpdated, setDbUpdated] = useState(0)

useEffect(() => {
    const savedCart = getDatabaseCart();
    const itemKeys = Object.keys(savedCart)

    const previousCart = itemKeys.map( id => {
        const dish = fakeData.find( data => data.id === parseInt(id) );
        dish.quantity = savedCart[id];
        return dish
    })
    setCart(previousCart)
},[dbUpdated])

// console.log(cart)

  return (
    <Boss.Provider value={ [cart, dbUpdated, setDbUpdated] }>
      <Router>
      <Header></Header>
        <Switch>
          <Route exact path='/'>
              <Home></Home>
          </Route>
          <Route path='/login'>
              <LogIn></LogIn>
          </Route>
          <Route path='/cart'>
              <Cart></Cart>
          </Route>
          <Route path='/details/:itemKey'>
              <Details></Details>     
          </Route>
          <Route path='/orderOnTheWay'>
              <OrderOnWay></OrderOnWay>
          </Route>
          <Route path='*'>
              <LinkNotFound></LinkNotFound>
          </Route>
        </Switch>
      </Router>
    </Boss.Provider>
  );
}

export default App;
