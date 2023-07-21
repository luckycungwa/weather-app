import React from "react";



const Card = ({heading, title, subTitle, description, iconClass}) => {
  return (
    <div>
      <div className="relative">
        <div className="row glass feature-card ">
          <div>
          <i className={iconClass}></i>
            {/* <img className="icon" src="../cloudy.png" alt="status-icon" /> */}
          </div>
          <div>
          
            <p className="small left">{heading}</p>
            <br />
            <br />
            <p className="large">
              {title} 
              <span className="medium">{subTitle}</span>
            </p>

          </div>
        </div>
      </div>

    </div>
  );
};

export default Card;
