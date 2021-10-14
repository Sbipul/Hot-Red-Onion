import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Details from './Pages/Home/Details/Details';
import Home from './Pages/Home/Home/Home';
import SignUp from './Pages/SignUp/SignUp';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
          <Switch>

            <Route exact path="/">
              <Home/>
            </Route>

            <Route path="/details/:id">
              <Details/>
            </Route>

            <Route path="/home">
              <Home/>
            </Route>

            <Route path="/sign">
              <SignUp/>
            </Route>
            
          </Switch>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
