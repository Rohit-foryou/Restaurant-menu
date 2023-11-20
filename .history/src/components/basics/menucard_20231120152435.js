import React from 'react';

const Menucard = ({ menuData }) => {
  return (
    <>
      {menuData.map((curElm) => (
        <div className="card-container" key={curElm.id}>
          <div className="card">
            <div className="card-body">
              <span className="card-number card-circle subtle">1</span>
              <span className="card-author subtle">{curElm.category}</span>
              <h2 className="card-title">{curElm.title}</h2>
              <span className="card-description subtle">
                {curElm.description}
              </span>
              <div className="card-read">Read</div>
            </div>
            {/* <img src={curElm.image} alt="images" className="card-media" /> */}
            <span className="card-tag subtle"> Order Now</span>
          </div>
        </div>
      ))}
    </>
  );
};

export default Menucard;
