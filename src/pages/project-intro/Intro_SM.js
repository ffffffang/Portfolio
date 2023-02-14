import React, { useEffect, useState } from "react";
import Banner from "../../components/Banner";
import Scroll from "../../components/Scroll";
import { LazyLoadImage } from "react-lazy-load-image-component";
import SideBar from "../../components/SideBar";
const Intro_SM = () => {
  const [title, setTitle] = useState("");
  useEffect(() => {
    setTitle((pre) => {
      return (pre = document.querySelectorAll(".post-content h4"));
    });
  }, []);
  return (
    <div className="intro-bg">
      {/* data是指 data/bammerdata ID */}
      <Banner data={"pj-social-media"} />
      <Scroll />
      {/* h5改成h4  */}
      {/* span改成div  */}
      <div className="post-grid">
        <SideBar title={title} />
        <div className="post-content">
          <div className="post-wrap">
            <div>
              <p>以下為在 GoFreight 時參與製作之社群媒體宣傳、影片。</p>
            </div>
            <div>
              <figure>
                <LazyLoadImage
                  src="/portfolio/images/Social/social.png"
                  alt=""
                />
              </figure>
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
    </div>
  );
};

export default Intro_SM;
