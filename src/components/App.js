import React from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';

// App Components
import Header from './Header';
import Home from './Home';
import Blog from './Blog';
import Contact from './Contact';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/blog" component={Blog} />
      <Route path="/contact" component={Contact} />
    </div>
  </BrowserRouter>
);

export default App;
