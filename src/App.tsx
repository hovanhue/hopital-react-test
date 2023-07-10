/* eslint-disable @typescript-eslint/no-unused-vars */
import './App.css';
import store from './redux/store';
import { Provider } from 'react-redux';
import { Home } from './containers/home/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Main } from './containers/Main';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './layout/Header';
import Result from './containers/result/Result';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <ToastContainer />
        <div className='container-fluid'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/next' component={Main} />
            <Route path='/result' component={Result} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
