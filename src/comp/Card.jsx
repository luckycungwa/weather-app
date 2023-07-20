import React from "react";



const Card = ({heading, title, subTitle, country, temp, city, date, time, iconClass}) => {
  return (
    <div>
      <div className="relative">
        <div className="info row glass">
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

      {/* <div className="feature-card">
      <div className="info">
        <p className="large">
          25&deg;<span className="medium"> C</span>
        </p>
        <p className="small">
          monday, 16:30
        </p>
      </div>
        
      </div> */}
    </div>
  );
};

export default Card;
