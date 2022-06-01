import logo from './logo.svg';
import './App.css';
import {Route , Switch} from 'react-router-dom'
import Header from './componet/Header/Header';
import Footer from './componet/Footer/Footer';
import Home from './container/Home';
import About from './container/About';
import Contact from './container/Contact';
import Shop from './container/Shop';
import News from './container/News';
import Singalnews from './container/SingalNews';
import Singleproduct from './container/Singleproduct';
import Home1 from './container/Home1';
import Cart from './container/Cart';
import Checkout from './container/Checkout';
import A404 from './container/A404';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path = {"/Home"} component = {Home}/>
        <Route exact path = {"/About"} component = {About}/>
        <Route exact path = {"/Contact"} component = {Contact}/>
        <Route exact path = {"/Shop"} component = {Shop}/>
        <Route exact path = {"/News"} component= {News}/>
        <Route exact path = {"/SingalNews"} component = {Singalnews}/>
        <Route exact path = {"/Singleproduct"} component = {Singleproduct} />
        <Route exact path = {"/Home1"} component = {Home1} />
        <Route exact path = {"/Cart"} component ={Cart} />
        <Route exact path = {"/Checkout"} component = {Checkout} />
        <Route exact path = {"/A404"} component = {A404} />
        
       </Switch>
      <Footer />
    </div>
  );
}

export default App;
