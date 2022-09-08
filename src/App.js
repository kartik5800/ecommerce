import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Header from './componet/Header/Header';
import Footer from './componet/Footer/Footer';
import Home from './container/Home/Home';
import About from './container/Home/About';
import Contact from './container/Home/Contact';
import Shop from './container/Home/Shop';
import News from './container/Home/News';
import Singleproduct from './container/Home/Singleproduct';
import Cart from './container/Home/Cart';
import Checkout from './container/Home/Checkout';
import A404 from './container/Home/A404';
import { SnackbarProvider } from 'notistack';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './Redux/Store';
import PublicRoute from './Routes/PublicRoute';
import Login from './container/Login-signup/Login';
import { Admin } from "../src/Admin/Container/Admin";

function App() {
  return (
    <div className="App">
      <SnackbarProvider maxSnack={3}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>

            <Switch>
              <PublicRoute exact path={"/"} component={Home} />
              <PublicRoute exact path={"/About"} component={About} />
              <PublicRoute exact path={"/Contact"} component={Contact} />
              <PublicRoute exact path={"/Shop"} component={Shop} />
              <PublicRoute exact path={"/News"} component={News} />
              <PublicRoute exact path={"/Singleproduct"} component={Singleproduct} />
              <PublicRoute exact path={"/Cart"} component={Cart} />
              <PublicRoute exact path={"/Checkout"} component={Checkout} />
              <PublicRoute exact path={"/A404"} component={A404} />
              <PublicRoute exact path={"/Login"} component={Login} />
              <Route exact path={"/Admin"} component={Admin} />
            </Switch>

          </PersistGate>
        </Provider>
      </SnackbarProvider>
    </div>
  );
}

export default App;
