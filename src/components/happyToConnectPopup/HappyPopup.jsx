import style from "./happyPopup.module.css";
import React, { useState, useEffect, useRef } from "react";

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
  