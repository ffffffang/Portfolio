import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { nanoid } from "nanoid";
const Card = (props) => {
  const IMAGE= <div className="card-img">
  <LazyLoadImage
    src={props.coverImg}
    alt={props.title}
  />
</div>;
const TEXT=<div className="card-text">
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
  {props.tag.map((ele, index) => {
    return (
      <span
        key={index}
        className={ele.toLowerCase().replace(" ","-")}
      >
        {ele}
      </span>
    );
  })}
</div>
</div>;
  return (
    <div className="card-wrap">
      {props.link !=="" ? <Link
        to={props.link}
        className="card-link"
      > 
      {IMAGE}
      {TEXT}
      </Link>
      : <a href={props.externalLink}   className="card-link" target='_blank'>
      {IMAGE}
      {TEXT}
      </a>
}
    </div>
  );
};

export default Card;
