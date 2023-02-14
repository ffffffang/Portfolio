import React, { useEffect } from "react";
import uuid from "react-uuid";
const SubBar = ({ title }) => {
  useEffect(() => {
    observerMenu();
  }, [title]);

  function observerMenu() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("id");
        if (entry.intersectionRatio > 0) {
          document.querySelector(`li a[href="#${id}"]`).classList.add("active");
        } else {
          document
            .querySelector(`li a[href="#${id}"]`)
            .classList.remove("active");
        }
      });
    });
    [...title].forEach((tit) => {
      observer.observe(tit.parentElement);
    });
  }
  return (
    <div className="toc">
      <ul>
        {[...title].map((ele, index) => {
          ele.parentElement.setAttribute("id", `title-${index + 1}`);
          return (
            <li key={uuid()}>
              <a href={`#title-${index + 1}`}>{ele.textContent}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SubBar;
