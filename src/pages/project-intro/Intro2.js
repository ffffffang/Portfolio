import React from "react";
import Banner from "../../components/Banner";
import { LazyLoadImage } from "react-lazy-load-image-component";
///1. Change Intro[number]
const Intro2 = () => {
  return (
    <div className="intro-bg">
      <Banner data={"pj-2"} />
      {/* h5改成h4  */}
      {/* span改成div  */}
      <div className="post-content">
        <div className="post-wrap">
          <div>
            <p>以下為在 GoFreight 時參與製作之社群媒體宣傳、影片。</p>
          </div>
          <div>
            <LazyLoadImage
              src="/portfolio/images/Social/social.png"
              alt=""
            />
          </div>
          <div className="video">
            <iframe
              width="1000"
              src="https://www.youtube.com/embed/LthNQkyy9f4"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="video-1"
            ></iframe>
          </div>
          <div>
            <p>
              Animation：Daisy Huang | Fangyu Lo | Zec Lai
              <br></br>
              Editor：Fangyu Lo
              <br></br>
              Dubbing：Nicole Sung
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro2;
