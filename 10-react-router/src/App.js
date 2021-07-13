import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import About from './pages/About';
import ContactUs from './pages/ContactUs';
import Home from './pages/Home';
import FormSubmitted from './pages/FormSubmitted';
import PostPage from './pages/PostPage';
import AllPosts from './pages/AllPosts';

function App() {
  return (
    <div className="App container">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/posts">Posts</Link>
            </li>
            <li>
              <Link to="/all-posts">Show All Posts</Link>
            </li>


          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <ContactUs/>
          </Route>
          <Route exact path="/form-submitted">
            <FormSubmitted/>
          </Route>
          <Route exact path="/posts">
            <PostPage/>
          </Route>
          <Route exact path="/all-posts">
            <AllPosts/>
          </Route>


        </Switch>
      </Router>
    </div>
  );
}

export default App;
