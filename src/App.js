import { Last } from 'react-bootstrap/esm/PageItem';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import Cart from './Pages/Cart/Cart';
import Error from './Pages/Error/Error';
import Details from './Pages/Home/Details/Details';
import Home from './Pages/Home/Home/Home';
import LastPage from './Pages/LastPage/LastPage';
import Login from './Pages/Login/Login';
import PrivetRoute from './Pages/PrivetRoute/PrivetRoute';
import SignUp from './Pages/SignUp/SignUp';
import WhyUs from './Pages/WhyUs/WhyUs';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <AuthProvider>
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

              <PrivetRoute path="/cart">
                <Cart/>
              </PrivetRoute>

              <Route path="/whyUs">
                <WhyUs/>
              </Route>

              <Route path="/confirmed">
                <LastPage/>
              </Route>

              <Route path="/sign">
                <SignUp/>
              </Route>

              <Route path="/login">
                <Login/>
              </Route>

              <Route path="*">
                <Error/>
              </Route>
              
            </Switch>
          <Footer/>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
