import React from 'react';
import './Content.css';
import vision from './assets/vison man.webp'
import drone from './assets/dron.webp'
import field from './assets/field.webp'

const Content = () => {
  return (
    <div className="container2">
      <div className="bir">
        <img src={vision} alt="Vision Man" width="360" height="240" />
        <h2 className="h2">Metaverse</h2>
        <h6>The metaverse is a partial or fully immersive digital networked experience...</h6>
      </div>
      <div className="ikki">
        <img src={drone} alt="Drone" width="360" height="240" />
        <h2 className="h2">5G Monetization</h2>
        <h6>Discover how 5G can help unleash new business growth for CSPs...</h6>
      </div>
      <div className="uch">
        <img src={field} alt="Field" width="360" height="240" />
        <h2 className="h2">Sustainability</h2>
        <h6>Learn and demonstrate your ability to automate, manage and control...</h6>
      </div>
    </div>
  );
};

export default Content;
