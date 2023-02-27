import style from "./Section.module.css";
import React, { useState, useEffect, useRef } from "react";
import {
  profileCardAll,
  profileCardBlog,
  profileCardEvents,
} from "../commonVariables/variables";

// ------------------------------Empty component start------------------------------//

export function Empty() {
  return (
    <>
      <div className={style.Empty}></div>
    </>
  );
}

// ------------------------------Empty component end------------------------------//

// ------------------------------motor detail images component start------------------------------//

//this is variable in array of object form
export const contentDetails = [
  {
    image: "./images/motorImage/slider1.jpg",
    des: "Cars and Sport Utility Vehicles",
    des2: "Experience our connected cars and UVs ",
  },
  {
    image: "./images/motorImage/slider2.jpg",
    des: "Trucks & Busses",
    des2: "Delivering unmatched performance on all terrains ",
  },
  {
    image: "./images/motorImage/slider4.jpg",
    des: "Defence",
    des2: "Serving the nation through the widest range of military products",
  },
];

export function ImageSection(ImageContainer) {
  return (
    <div className={style.motorContainer}>
      {contentDetails.map((value, index) => {
        return (
          <div className={style.motorBox} key={index}>
            <a href="#">
              <img src={value.image} alt="Altroz" />
              <div className={style.des}>
                <h2>
                  {value.des}
                  <i
                    className="fa fa-angle-down"
                    style={{ fontSize: "20px" }}
                  ></i>
                </h2>
                <p>{value.des2}</p>
              </div>
            </a>
          </div>
        );
      })}
    </div>
  );
}

// ------------------------------motor detail images component end ------------------------------//
// ------------------------Popup of {happy to connect} component  start------------------------ //

// export function HappyToConnect() {
//   const [isVisible, setIsVisible] = useState(false);

//   const toggle = () => {
//     setIsVisible(!isVisible);
//   };

//   return (
//     <div
//       id="container"
//       className={style.container}
//       style={{
//         background: isVisible ? "#00000070" : "",
//         height: isVisible ? "calc(100vh - 72px)" : "",
//         width: isVisible ? "100vw" : "",
//       }}
//     >
//       <div
//         className={style.parentDiv}
//         style={{ height: isVisible ? "252px" : "43px" }}
//       >
//         <button
//           onClick={toggle}
//           className={style.btn}
//           style={{ backgroundColor: isVisible ? "#030352" : " #2f71b7" }}
//         >
//           Happy To Connect
//         </button>
//         <div className={style.popupDiv}>
//           <div className={style.popupDiv1}>
//             <a href="#">
//               <img src="./images/call_n.jpg" alt="" />
//             </a>
//           </div>
//           <div className={style.popupDiv2}>
//             <li>
//               <a href="#">
//                 <img
//                   src="./images/dealer-locator-icon.png"
//                   alt=""
//                   width={22}
//                   height={35}
//                 />
//                 <span>
//                   Dealer <br /> Locator
//                 </span>
//               </a>
//             </li>
//             <li>
//               <a href="#">
//                 <img
//                   src="./images/calculator-icon.png"
//                   alt=""
//                   width={26}
//                   height={28}
//                 />
//                 <span>
//                   EMI <br /> Calculator
//                 </span>
//               </a>
//             </li>
//             <li>
//               <a href="#">
//                 <img
//                   src="./images/contact-us-icon.png"
//                   alt=""
//                   width={26}
//                   height={28}
//                 />
//                 <span>
//                   Contact <br /> Us
//                 </span>
//               </a>
//             </li>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
export function HappyToConnect() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (
  //       containerRef.current &&
  //       !containerRef.current.contains(event.target)
  //     ) {
  //       setIsVisible(false);
  //     }
  //   };
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [containerRef]);

  const toggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div
      id="container"
      className={style.container}
      style={{
        // background: isVisible ? "#00000070" : "",
        height: isVisible ? "calc(100vh - 72px)" : "",
        width: isVisible ? "100vw" : "",
      }}
    >
      <div
        ref={containerRef}
        className={style.parentDiv}
        style={{ height: isVisible ? "252px" : "43px" }}
      >
        <button
          onClick={toggle}
          className={style.btn}
          style={{ backgroundColor: isVisible ? "#030352" : " #2f71b7" }}
        >
          Happy To Connect
        </button>
        <div className={style.popupDiv}>
          <div className={style.popupDiv1}>
            <a href="#">
              <img src="./images/call_n.jpg" alt="" />
            </a>
          </div>
          <div className={style.popupDiv2}>
            <li>
              <a href="#">
                <img
                  src="./images/dealer-locator-icon.png"
                  alt=""
                  width={22}
                  height={35}
                />
                <span>
                  Dealer <br /> Locator
                </span>
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  src="./images/calculator-icon.png"
                  alt=""
                  width={26}
                  height={28}
                />
                <span>
                  EMI <br /> Calculator
                </span>
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  src="./images/contact-us-icon.png"
                  alt=""
                  width={26}
                  height={28}
                />
                <span>
                  Contact <br /> Us
                </span>
              </a>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}

// ------------------------Popup of {happy to connect} component  end------------------------ //

// ------------------------------Profile Card  component  Start----------------------------- //

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

// const ProfileImage = () => {
//   // console.log(cards);
//   const [cards, setCards] = useState(profileCardAll);

//   const [scrollPosition, setScrollPosition] = useState(0);

//   const handleScrollLeft = () => {
//     const nextPosition = Math.max(scrollPosition - 1, -1);
//     setScrollPosition(nextPosition === -1 ? cards.length - 3 : nextPosition);
//   };

//   const handleScrollRight = () => {
//     const nextPosition = scrollPosition + 1;
//     // if(nextPosition >= cards.length-2){
//     //   // setScrollPosition(0)
//     //   setCards([...cards,...cards]);
//     // }
//     // else{
//     //   setScrollPosition(nextPosition)
//     // }
//     setScrollPosition(nextPosition >= cards.length - 2 ? 0 : nextPosition);
//   };

//   return (
//     <>
//       <div className={style.pcDiv2}>
//         <div className={style.pcDiv2Top}>
//           <div
//             className={style.pcDiv2TopScroll}
//             style={{ left: -scrollPosition * 360, transition: "left 1s" }}
//           >
//             {cards.map((value, index) => {
//               return (
//                 <div className={style.pcDiv2CardBox} key={index}>
//                   <a href="#">
//                     <div className={style.image}>
//                       <img
//                         src={value.img}
//                         alt=""
//                         width={"100%"}
//                         height={"210px"}
//                       />
//                       <span>{value.span}</span>
//                     </div>
//                     <div className={style.content}>
//                       <p>{value.details}</p>
//                     </div>
//                   </a>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//         <div className={style.pcDiv2Bottom}>
//           <button onClick={handleScrollLeft}>
//             <i
//               className="fa fa-angle-left"
//               style={{ fontSize: "30px", fontWeight: "lighter" }}
//             ></i>
//           </button>
//           <button onClick={handleScrollRight}>
//             <i
//               className="fa fa-angle-right"
//               style={{ fontSize: "30px", fontWeight: "lighter" }}
//             ></i>
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// ------------------------------Profile Card  component  end----------------------------- //
