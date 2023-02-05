import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import Button from "../components/Button";
import data from "../data/data";
import { Link } from "react-router-dom";

const Project = () => {
  const [card, setCard] = useState(data);
  let cardData = card.map((ele) => {
    return (
      <Card
        key={ele.id}
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
        return compare.tag.value.includes(currentValue);
      });
      //update card data
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
  }, []);
  return (
    <>
      <div className="container">
        <section className="hero-section">
          <div className="hero-left">
            <h1>Hi there, I'm Fang.</h1>
            <p>A product designer who paints reads, and solves problems.</p>
            <Link to="/portfolio/about">
              <Button name="About me" />
            </Link>
          </div>
          <div className="hero-right">
            <img
              src="/portfolio/images/Me.png"
              alt=""
              width="455"
              height="455"
            />
          </div>
        </section>
        <section className="tag-wrap">
          <Button
            name="All"
            active="active"
            click={changeTab}
          />
          <Button
            name="B2B"
            click={changeTab}
          />
          <Button
            name="B2C"
            click={changeTab}
          />
          <Button
            name="SaaS"
            click={changeTab}
          />
          <Button
            name="APP"
            click={changeTab}
          />
          <Button
            name="Side Project"
            click={changeTab}
          />
          <Button
            name="Marketing Design"
            click={changeTab}
          />
        </section>
        <div className="card-box">{cardData}</div>
      </div>
    </>
  );
};

export default Project;
