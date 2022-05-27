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
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
