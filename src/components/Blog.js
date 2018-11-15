import React from 'react';

// My terminal told me to remove {Component } from import React, { Component } from 'react';

// Components
import LoadingSpinner from './LoadingSpinner'

// State is holding both the array of blogs received from API and a loading boolean that is a placeholder until the blogs load in
class Blog extends React.Component {
  constructor () {
    super()
    this.state = {
      blogs: [],
      loading: true,
    }
  }
// Fetch WordPress API blogs from Posts endpoint
  componentDidMount() {
    let API = "http://findingrubies.com/wp-json/wp/v2/posts?per_page=100";
    fetch(API)
      .then(response => response.json())
      .then(response => {
        this.setState({blogs: response, loading: false})
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

// Render blog posts (title, date, and copy) to DOM
// Need to fix date styling
  render () {
    let blogs;
    if (this.state.loading) {
      blogs = <LoadingSpinner />;
    } else {
      blogs = this.state.blogs.map((blogs, index) => {
        return (
          <div id="blog" key={index}>
            <h3 className="title">{blogs.title.rendered}</h3>
            <p>{blogs.date}</p>
            <div dangerouslySetInnerHTML={{__html: blogs.content.rendered}} />
          </div>
        );
      });
    }

    return (
      <div className="Blog">
        <h2 id="blog-header">Blog Posts</h2>
        {blogs}
      </div>
    )
  }
}

export default Blog;
