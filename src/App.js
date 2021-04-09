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
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import fakeData from "./fakeData/fakeData";
import { getDatabaseCart } from "./utilities/databaseManager";


export const Boss = createContext()
export const Address = createContext()
export const UserContext = createContext();

function App() {

const [cart, setCart] = useState([])
const [loggedInUser, setLoggedInUser] = useState({})
const [dbUpdated, setDbUpdated] = useState(0)

const [address, setAddress] = useState()

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


  return (
    <Boss.Provider value={ [cart, dbUpdated, setDbUpdated] }>
    <Address.Provider value={[address, setAddress]}>
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      {/* <h2>Name : {loggedInUser.displayName}</h2> */}
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
          <PrivateRoute path='/orderOnTheWay'>
              <OrderOnWay></OrderOnWay>
          </PrivateRoute>
          <Route path='*'>
              <LinkNotFound></LinkNotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
    </Address.Provider>
    </Boss.Provider>
  );
}

export default App;
