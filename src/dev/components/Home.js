import React from 'react';
import StaticText from './StaticText.js';
import setHTMLBackground from '../functions/setHTMLBackground.js';

const Home = (props) => {
  setHTMLBackground(1);
  return (
    <div>
      <StaticText text="Uudenmaankatu 1 A, 00100 Helsinki" />
      <div className="statictext phone"><a href="tel:+358407066006"> Phone: +358 40 706 6006</a></div>
      <StaticText text={props.opentoday} />
      <StaticText text="Nearby? There's usually room at the bar, or call us for a reservation." />
      <StaticText text="We're closed 10.7 - 23.7." />
    </div>
  );
}

  export default Home;
