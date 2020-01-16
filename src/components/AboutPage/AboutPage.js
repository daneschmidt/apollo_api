import React from 'react';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const AboutPage = () => (
  <div>
    <div>
      <p>
        The NASA API was created by Dane Schmidt as a two week sprint project at Prime Digital Academy in Jan 2020
        The API will be updated as time permits with additional NASA mission info as well as other agencies and countries space missions
        Please feel free to contact me at daneschmidt@gmail.com if you have any questions, concerns or requests.

        ALL IMAGES ARE MEDIA PROPERTY OF NASA. 
      </p>
    </div>
  </div>
);

export default AboutPage;
