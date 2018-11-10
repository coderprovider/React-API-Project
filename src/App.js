import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state={
      blogs: [],
    }
  }

// Fetch WordPress API blog posts
  componentDidMount() {
    let API = "http://findingrubies.com/wp-json/wp/v2/posts";
    fetch(API)
      .then(response => response.json())
      .then(response => {
        this.setState({blogs: response
        })
      })
  }

// Render blog title and blog post to DOM
  render() {
    let blogs = this.state.blogs.map((blogs, index) => {
      return (
        <div key={index}>
          <h2 className="title">{blogs.title.rendered}</h2>
          <div dangerouslySetInnerHTML={{__html: blogs.content.rendered}} />
        </div>
      );
    })

    return (
      <div className="App">
        <h1>Finding Rubies Blog</h1>
        <button>Click for 10 Most Recent Blog Posts!</button>

      </div>
    );
  }
}


export default App;
