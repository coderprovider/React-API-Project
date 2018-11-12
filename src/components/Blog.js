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
// Fetch WordPress API blog posts; eventually I want to bring in <LoadingSpinner />
  componentDidMount() {
    let API = "http://findingrubies.com/wp-json/wp/v2/posts";
    fetch(API)
      .then(response => response.json())
      .then(response => {
        this.setState({blogs: response, loading: false})
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

// Render button for blogs to print to DOM
  render () {
    let blogs;
    if (this.state.loading) {
      blogs = <LoadingSpinner />;
    } else {
      blogs = this.state.blogs.map((blogs, index) => {
        return (
          <div id="blog" key={index}>
            <h2 className="title">{blogs.title.rendered}</h2>
            <p>{blogs.date}</p>
            <div dangerouslySetInnerHTML={{__html: blogs.content.rendered}} />
          </div>
        );
      });
    }

    return (
      <div className="Blog">
        {blogs}
      </div>
    )
  }
}

export default Blog;
