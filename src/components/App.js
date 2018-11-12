import React from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';

// App Components
import Header from './Header';
import Footer from './Footer';
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
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
