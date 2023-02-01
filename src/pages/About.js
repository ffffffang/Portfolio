import React, { useEffect } from "react";
import Title from "../components/Title";
import Text from "../components/Text";
import experience from "../data/experience";
import education from "../data/education";
import uuid from "react-uuid";
const About = () => {
  useEffect(() => {
    document.querySelector("body").style.background = "#151719";
  }, []);
  const experienceData = experience.map((ele) => {
    return (
      <Text
        key={uuid()}
        {...ele}
      />
    );
  });
  const educationData = education.map((ele) => {
    return (
      <Text
        key={uuid()}
        {...ele}
      />
    );
  });
  return (
    <div className="container">
      <section className="about-hero">
        <div>
          <h1>Fang</h1>
          <p className="pos">Product Designer</p>
        </div>
        <div className="about-link">
          <a href="mailto:fangyulo13@gmail.com">
            <svg
              width="49"
              height="61"
              viewBox="0 0 49 61"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="24"
                cy="24"
                r="24"
                fill="white"
              />
              <path
                d="M23.9999 23.048L34.0414 16.48C33.6376 16.1717 33.1474 16.0034 32.6428 16H15.3571C14.8524 16.0034 14.3622 16.1717 13.9585 16.48L23.9999 23.048Z"
                fill="black"
              />
              <path
                d="M24.4243 24.6719L24.2907 24.7359H24.2279C24.1555 24.7688 24.0787 24.7904 24 24.7999C23.9348 24.8083 23.8688 24.8083 23.8036 24.7999H23.7407L23.6071 24.7359L13.0786 17.8079C13.0283 18.0011 13.0019 18.2 13 18.3999V29.5999C13 30.2364 13.2483 30.8469 13.6904 31.2969C14.1324 31.747 14.732 31.9999 15.3571 31.9999H32.6429C33.268 31.9999 33.8676 31.747 34.3096 31.2969C34.7517 30.8469 35 30.2364 35 29.5999V18.3999C34.9981 18.2 34.9717 18.0011 34.9214 17.8079L24.4243 24.6719Z"
                fill="black"
              />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/ffffffangyu/">
            <svg
              width="48"
              height="61"
              viewBox="0 0 48 61"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="24"
                cy="24"
                r="24"
                fill="white"
              />
              <path
                d="M15 16.9747C15 16.4023 15.2027 15.9301 15.6081 15.5581C16.0135 15.186 16.5405 15 17.1892 15C17.8263 15 18.3417 15.1832 18.7355 15.5495C19.1409 15.9273 19.3436 16.4195 19.3436 17.0263C19.3436 17.5758 19.1467 18.0337 18.7529 18.4C18.3475 18.7778 17.8147 18.9667 17.1544 18.9667H17.1371C16.5 18.9667 15.9846 18.7778 15.5907 18.4C15.1969 18.0222 15 17.5471 15 16.9747ZM15.2259 32V20.5293H19.083V32H15.2259ZM21.2201 32H25.0772V25.5949C25.0772 25.1943 25.1236 24.8852 25.2162 24.6677C25.3784 24.2784 25.6245 23.9493 25.9546 23.6803C26.2847 23.4113 26.6988 23.2768 27.1969 23.2768C28.4942 23.2768 29.1429 24.1411 29.1429 25.8697V32H33V25.4232C33 23.729 32.5946 22.4439 31.7838 21.5682C30.973 20.6924 29.9016 20.2545 28.5695 20.2545C27.0753 20.2545 25.9112 20.8899 25.0772 22.1606V22.1949H25.0598L25.0772 22.1606V20.5293H21.2201C21.2432 20.8956 21.2548 22.0347 21.2548 23.9465C21.2548 25.8582 21.2432 28.5427 21.2201 32Z"
                fill="black"
              />
            </svg>
          </a>
        </div>
      </section>
      <section className="intro-section">
        <div className="block-wrap">
          <div className="title-wrap">
            <Title name="Fangyu Lo" />
            <p className="p-text">Taoyuan, Taiwan</p>
            <a
              href="tel:886984039021"
              className="phone"
            >
              <p className="p-text">+886 984039021</p>
            </a>
            <a href="mailto:fangyulo13@gmail.com">
              <p className="p-text">fangyulo13@gmail.com</p>
            </a>
          </div>
          <div className="text-wrap">
            <div className="des">
              <p className="p-text">
                Product designer, focused on designing and creating meaningful
                and memorable product experiences. Dedicate to understanding
                users' needs, solve the user’s problems as well as solving
                problems they may not even know they have.
              </p>
            </div>
          </div>
        </div>
        <div className="line"></div>
        <div className="block-wrap">
          <div className="title-wrap">
            <Title name="Experience" />
          </div>
          <div className="text-wrap">{experienceData}</div>
        </div>
        <div className="line"></div>
        <div className="block-wrap">
          <div className="title-wrap">
            <Title name="Eudcation" />
          </div>
          <div className="text-wrap">{educationData}</div>
        </div>
      </section>
    </div>
  );
};

export default About;
