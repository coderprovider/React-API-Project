import React from 'react';

// My terminal told me to remove {Component } from import React, { Component } from 'react';

// Components
import LoadingSpinner from './LoadingSpinner'

// State is holding both the array of images received from API (gallery) and a loading boolean that is a placeholder until the images load in
class Gallery extends React.Component {
  constructor () {
    super()
    this.state = {
      gallery: [],
      loading: true,
    }
  }
// Fetch WordPress API images from Media endpoint
  componentDidMount() {
    let API = "http://findingrubies.com/wp-json/wp/v2/media";
    fetch(API)
      .then(response => response.json())
      .then(response => {
        this.setState({gallery: response, loading: false})
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

// Render button for images to print to DOM
// <p>{images.date}</p> Add later
  render () {
    let images;
    if (this.state.loading) {
      images = <LoadingSpinner />;
    } else {
      images = this.state.gallery.map((gallery, index) => {
        return (
          <a href={gallery.guid.rendered}>
            <img src={gallery.guid.rendered} alt={gallery.alt_text} id={index} className="gallery-image" key={index}/>
          </a>
        );
      });
    }

    return (
      <div className="main-content">
        <div className="gallery">
          <h2>Gallery</h2>
          {images}
        </div>
      </div>
    )
  }
}

export default Gallery;
