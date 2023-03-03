import style from "./profileCard.module.css";
import React, { useState, useEffect, useRef } from "react";
import {
  profileCardAll,
  profileCardBlog,
  profileCardEvents,
} from "../commonVariables/variables";
// export function ProfileCard() {
//   return (
//     <div className={styles.cardsParentDiv}>
//       <label className={styles.container}>
//         One
//         <input type="radio" checked="checked" name="radio" />
//         <span className={styles.checkmark}></span>
//       </label>
//       <label className={styles.container}>
//         Two
//         <input type="radio" name="radio" />
//         <span className={styles.checkmark}></span>
//       </label>
//       <label className={styles.container}>
//         Three
//         <input type="radio" name="radio" />
//         <span className={styles.checkmark}></span>
//       </label>
//     </div>
//   );
// }

export function ProfileCards() {
  const [selected, setSelected] = useState("All");
  // const imageSpan = document.getElementById("imageSpan");

  const handleClick = (value) => {
    // console.log(value);
    setTimeout(() => {
      setSelected(value);
      if (value === "All") {
        setCards(profileCardAll);
      } else if (value === "Blog") {
        setCards(profileCardBlog);
      } else if (value === "Events") {
        setCards(profileCardEvents);
      } else {
        cards();
      }
    }, 500); // delay execution by 0.5 second (500 milliseconds)
  };

  const [cards, setCards] = useState(profileCardAll);

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScrollLeft = () => {
    const nextPosition = Math.max(scrollPosition - 1, -1);
    setScrollPosition(nextPosition === -1 ? cards.length - 3 : nextPosition);
  };

  const handleScrollRight = () => {
    const nextPosition = scrollPosition + 1;
    setScrollPosition(nextPosition >= cards.length - 2 ? 0 : nextPosition);
  };

  return (
    <div className={style.profileCardContainer}>
      <div className={style.pcDiv1}>
        <h3>{selected}</h3>
        <div className={style.filter}>
          <label>
            <input
              type="radio"
              name="filter"
              id="All"
              value="All"
              checked={selected === "All"}
              onClick={() => handleClick("All")}
            />
            <span id="imageSpan">
              <img
                id="imgHover"
                style={{ position: "absolute", top: "0" }}
                className={style.imgHover}
                src="./images/radio-active-img.png"
                alt=""
              />
              <img
                src={
                  selected === "All"
                    ? "./images/radio-active-img.png"
                    : "./images/radio-inactive-img.png"
                }
                alt=""
              />
            </span>
            <span>All</span>
          </label>
          <label htmlFor="Blog">
            <input
              type="radio"
              name="filter"
              id="Blog"
              value="Blog"
              checked={selected === "Blog"}
              onClick={() => handleClick("Blog")}
            />
            <span id="imageSpan1">
              <img
                id="imgHover"
                style={{ position: "absolute", top: "0" }}
                className={style.imgHover}
                src="./images/radio-active-img.png"
                alt=""
              />
              <img
                src={
                  selected === "Blog"
                    ? "./images/radio-active-img.png"
                    : "./images/radio-inactive-img.png"
                }
                alt=""
              />
            </span>
            <span>Blog</span>
          </label>
          <label htmlFor="Events">
            <input
              type="radio"
              name="filter"
              id="Events"
              value="Events"
              checked={selected === "Events"}
              onClick={() => handleClick("Events")}
            />
            <span id="imageSpan2">
              <img
                id="imgHover"
                style={{ position: "absolute", top: "0" }}
                className={style.imgHover}
                src="./images/radio-active-img.png"
                alt=""
              />
              <img
                src={
                  selected === "Events"
                    ? "./images/radio-active-img.png"
                    : "./images/radio-inactive-img.png"
                }
                alt=""
              />
            </span>
            <span>Events</span>
          </label>
        </div>
      </div>
      {/* <ProfileImage cards={profileCardAll} /> */}
      <>
        <div className={style.pcDiv2}>
          <div className={style.pcDiv2Top}>
            <div
              className={style.pcDiv2TopScroll}
              style={{
                left: -scrollPosition * 325.8,
                transition: "left 0.8s ease-out",
              }}
            >
              {cards.map((value, index) => {
                return (
                  <div className={style.pcDiv2CardBox} key={index}>
                    <a href="#">
                      <div className={style.image}>
                        <img
                          src={value.img}
                          alt=""
                          width={"100%"}
                          height={"190px"}
                        />
                        <span>{value.span}</span>
                      </div>
                      <div className={style.content}>
                        <p>{value.details}</p>
                      </div>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={style.pcDiv2Bottom}>
            <button onClick={handleScrollLeft}>
              <i
                className="fa fa-angle-left"
                style={{ fontSize: "22px", fontWeight: "lighter" }}
              ></i>
            </button>
            <button onClick={handleScrollRight}>
              <i
                className="fa fa-angle-right"
                style={{ fontSize: "22px", fontWeight: "lighter" }}
              ></i>
            </button>
          </div>
        </div>
      </>
    </div>
  );
}
