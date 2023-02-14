import React, { useEffect } from "react";
import bannerdata from "../data/bannerdata.js";
import { nanoid } from "nanoid";

const Banner = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  let bannerData = bannerdata
    .filter((val) => {
      return val.id.includes(props.data);
    })
    .map((item) => {
      return (
        <div
          className="banner"
          key={nanoid()}
        >
          <div
            className="bg-wrapper"
            style={{ backgroundImage: `url(${item.bgs})` }}
          >
            <img
              src={item.bg}
              alt={item.id}
              className="bg-banner"
            />
          </div>
          <div className="info">
            <div>
              <h3>MY ROLE</h3>
              {item.role.map((role) => {
                return <p key={nanoid()}>{role}</p>;
              })}
            </div>
            <div>
              <h3>PLATFORMS</h3>
              <p>{item.platforms}</p>
            </div>
            <div>
              <h3>YEARS</h3>
              <p>{item.years}</p>
            </div>
          </div>
          <div className="title">
            <h3>{item.subtitle}</h3>
            {item.title.map((title) => {
              return <h1 key={nanoid()}>{title}</h1>;
            })}
          </div>
        </div>
      );
    });
  document.querySelector("body").style.background = "#fff";
  return <>{bannerData}
  </>;
};

export default Banner;
