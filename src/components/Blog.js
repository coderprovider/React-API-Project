import React from 'react';

// import React, { Component } from 'react';

class Blog extends React.Component {
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

// Render button for blogs to print to DOM
  render () {
    let blogs = this.state.blogs.map((blogs, index) => {
      return (
        <div id="blog" key={index}>
          <h2 className="title">{blogs.title.rendered}</h2>
          <p>{blogs.date}</p>
          <div dangerouslySetInnerHTML={{__html: blogs.content.rendered}} />
        </div>
      );
    })
// eventually I want to click and scroll
    return (
      <div className="Blog">
        {blogs}
      </div>
    )
  }
}

export default Blog;
