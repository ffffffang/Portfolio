import React, { useState } from "react";
import Card from "../components/Card";
import Button from "../components/Button";
import data from "../data/data";
import { Link } from "react-router-dom";

const Project = () => {
  const [card, setCard] = useState(data);
  let cardData = card.map((ele) => {
    return <Card key={ele.id} {...ele} />;
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

  document.querySelector("body").style.background = "#151719";
  return (
    <>
      <div className="container">
        <section className="hero-section">
          <div className="hero-left">
            <h1>Grid: a dark directory template for Super</h1>
            <p>利用設計的力量創造易世界</p>
            <Link to="/portfolio/about">
              <Button name="About me" />
            </Link>
          </div>
          <div className="hero-right">
            <img
              src="/portfolio/images/MU_404page.jpg"
              alt=""
              width="455"
              height="455"
            />
          </div>
        </section>
        <section className="tag-wrap">
          <Button name="All" active="active" click={changeTab} />
          <Button name="B2B" click={changeTab} />
          <Button name="B2C" click={changeTab} />
          <Button name="SASS" click={changeTab} />
          <Button name="APP" click={changeTab} />
          <Button name="Side Project" click={changeTab} />
          <Button name="Marketing Design" click={changeTab} />
        </section>
        <div className="card-box">{cardData}</div>
      </div>
    </>
  );
};

export default Project;
