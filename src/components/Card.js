import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
const Card = (props) => {
  return (
    <div className="card-wrap">
      <Link
        to={props.link}
        className="card-link"
      >
        {/* put project url */}
        <div className="card-img">
          <LazyLoadImage
            src={props.coverImg}
            alt={props.title}
          />
        </div>
        <div className="card-text">
          <h2 className="card-title">{props.title}</h2>
          <div className="p-text card-des ">
            {props.description.map((text, index) => {
              return (
                <p
                  className="intro"
                  key={`${index}-text`}
                >
                  {text}
                </p>
              );
            })}
          </div>
          <div className="tag-class">
            {props.tag.color.map((ele, index) => {
              return (
                <span
                  key={index}
                  className={ele}
                >
                  {props.tag.value[index]}
                </span>
              );
            })}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
