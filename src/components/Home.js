import React from 'react';
import FamilyPhoto from '../img/family.jpg';
import Footer from './Footer'

// Home/about Component with a picture and copy about blog.
const Home = () => (
  <div className="main-content">
    <h2>Welcome!</h2>
    <div id="home">
      <img src={FamilyPhoto} alt="Our family" />
      <div id="home-copy">

        <p><b>Thanks for stopping by!</b></p>

        <p>My name is Kayla, and I am a wife, a momma, and a nurse. I believe that as we grow older, we are never to stop seeking out ways in which we might flourish, ways that we might become more truly human.</p>

        <p>With that said, my desire for this blog is that it would be an outlet for me to relay the little rubies that I find along this wild journey called life; hence the blog title, “Finding Rubies.” I love the idea of using what the Divine has given us to nourish our bodies and the bodies’ of those we love.</p>

        <p>Come along with me on this journey, and you will find recipes, natural living ideas, and much more!</p>
      </div>
    </div>
    <Footer />
  </div>
);

export default Home;
