import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import Button from "../components/Button";
import data from "../data/data";
import { Link } from "react-router-dom";
const Project = () => {
  const TAG = [
    "All",
    "APP",
    "SaaS",
    "B2B",
    "B2C",
    "Released",
    "DesignOps",
    "Marketing Design",
  ];
  const [card, setCard] = useState(data);
  const cardData = card.map((ele, index) => {
    return (
      <Card
        key={`card-${index}`}
        {...ele}
      />
    );
  });

  function changeTab(event) {
    let currentValue = event.target.dataset.tag;
    if (currentValue === "All") {
      setCard(data);
    } else {
      let newTab = data.filter((compare) => {
        return compare.tag.includes(currentValue);
      });
      setCard(newTab);
    }
    let button = document.querySelectorAll(".tag-wrap>div");
    button.forEach((ele) => {
      ele.classList.remove("active");
    });
    event.target.classList.add("active");
  }

  useEffect(() => {
    document.querySelector("body").style.background = "#151719";
    document.querySelectorAll(".tag-wrap>div")[0].classList.add("active");
  }, []);
  return (
    <>
      <img
        src="/portfolio/images/gradient-bg.webp"
        className="top-bg"
        alt="gradient"
      ></img>
      <div className="container">
        <section className="hero-section">
          <div className="hero-left">
            <h1>Hi there, I'm Fang.</h1>
            <p>
              A product designer who paints,&ensp;reads,&ensp;and solves
              problems.
            </p>
            <Link to="/portfolio/about">
              <Button name="About me" />
            </Link>
          </div>
          <div className="hero-right">
            <img
              src="/portfolio/images/Me.png"
              alt=""
            />
          </div>
        </section>
        <section className="tag-wrap">
          {TAG.map((tag) => {
            return (
              <Button
                key={`filter-${tag}`}
                name={tag}
                click={changeTab}
              />
            );
          })}
        </section>
        <div className="card-box">{cardData}</div>
      </div>
    </>
  );
};

export default Project;
