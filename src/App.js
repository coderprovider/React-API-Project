import React, { Component } from 'react';
import './App.css';
import './Responsive.css'

import Header from './Header';
import Footer from './Footer';

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      blogs: [],
      isHidden: true
    }
  }
// Fetch WordPress API blog posts
  componentDidMount() {
    let API = "http://findingrubies.com/wp-json/wp/v2/posts";
    fetch(API)
      .then(response => response.json())
      .then(response => {
        this.setState({blogs: response})
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }
// Toggle state of isHidden for Button to reveal blogs
  toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

// Render button for blogs to print to DOM
  render () {
    let blogs = this.state.blogs.map((blogs, index) => {
      return (
        <div id="blogposts" key={index}>
          <h2 className="title">{blogs.title.rendered}</h2>
          <p>{blogs.date}</p>
          <div dangerouslySetInnerHTML={{__html: blogs.content.rendered}} />
        </div>
      );
    })
// eventually I want to click and scroll
    return (
      <div className="App">
        <Header />
        <button onClick={this.toggleHidden.bind(this)}>
          <p>Show/Hide Recent Posts</p>
        </button>
        {!this.state.isHidden && blogs}
        <Footer />
      </div>
    )
  }
}

export default App;
