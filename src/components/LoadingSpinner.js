import React from 'react';
import SpinnerImage from '../img/loading.gif';

// Loading spinner Component that acts as a placeholder until the API loads
const LoadingSpinner = () => (
  <div class="main-content">
    <div id="loading-spinner">
      <img src={SpinnerImage} alt="Loading in progress" />
    </div>
  </div>
);

export default LoadingSpinner;
