import React from 'react'

const Menucard = ({menuData}) => {
  return (
    <>
        {
            {menuData.map((curElm)=> {
                return (
                    <div className="card-container">
            <div className="card">
                <div className="card-body">
                    <span className="card-number card-circle subtle">1</span>
                    <span className="card-author subtle">Breakfast</span>
                    <h2 className="card-title">Maggi</h2>
                    <span className="card-description subtle">
                      l love maggi dsv ds  sdf sdg  ds gadfsasgasddsg gsd 
                      gds dgs adsgd s sdg gads gdsgsagdsgds gdgd sgds  dsggds 
                      dgs  gds. 
                    </span> 
                    <div className="card-read">Read</div>
                  </div>  
                    {/* <img src={image} alt="images" className="card-media" /> */}
                    <span className="card-tag subtle"> Order Now</span>
                
            </div>
        </div>      
                );
            })}
        }
        
    </>
  );
};

export default Menucard;
