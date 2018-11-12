import React from 'react';
import SpinnerImage from '../img/loading.gif';

const LoadingSpinner = () => (
  <div class="main-content">
    <div id="loading-spinner">
      <img src={SpinnerImage} alt="Loading in progress" />
    </div>
  </div>
);

export default LoadingSpinner;
