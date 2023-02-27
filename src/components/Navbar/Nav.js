import { useState, useEffect, useRef } from "react";
import NavBar from "./Nav.module.css";
import { BiSearch } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { TfiAngleRight } from "react-icons/tfi";

export function Nav() {
  const [navOuter, setNavOuter] = useState(false);
  const [showColumList, setShowColumList] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [showNavList, setShowNavList] = useState({
    AboutUs: false,
    Products: false,
    Markets: false,
    CSR: false,
    Investors: false,
    Media: false,
  });

  // const Toggle = () => {
  //   if (showColumList == true) {
  //     document.body.style.position = "fixed";
  //     return (
  //       <div className={NavBar.columnList} id="toggleDiv">
  //         <ul>
  //           <li>
  //             About Us{" "}
  //             <span>
  //               <i className="fa fa-angle-right"></i>
  //             </span>
  //           </li>
  //           <li>
  //             Products{" "}
  //             <span>
  //               <i className="fa fa-angle-right"></i>
  //             </span>
  //           </li>
  //           <li>
  //             Markets{" "}
  //             <span>
  //               <i className="fa fa-angle-right"></i>
  //             </span>
  //           </li>
  //           <li>
  //             CSR{" "}
  //             <span>
  //               <i className="fa fa-angle-right"></i>
  //             </span>
  //           </li>
  //           <li>
  //             Investors{" "}
  //             <span>
  //               <i className="fa fa-angle-right"></i>
  //             </span>
  //           </li>
  //           <li>
  //             Media{" "}
  //             <span>
  //               <i className="fa fa-angle-right"></i>
  //             </span>
  //           </li>
  //           <li>Blogs </li>
  //           <li>Careers </li>
  //           <li>Contact Us </li>
  //         </ul>
  //       </div>
  //     );
  //   } else {
  //     document.body.style.position = "static";
  //     return "";
  //   }
  // };

  // ------------------------list shows function end------------------------//

  // ------------------------NavBarEvents function start------------------------//

  const handleMouseOver = (event, item) => {
    setShowNavList({ ...showNavList, [item]: true });
    setShowColumList(false);
    setShowSearchBar(false);
  };

  const handleMouseOut = (event, item) => {
    setShowNavList({ ...showNavList, [item]: false });
  };

  const handleShow = () => {
    setShowColumList(!showColumList);
    setShowSearchBar(false);
  };

  const SearchBarShow = () => {
    setShowSearchBar(!showSearchBar);
    setShowColumList(false);
  };
  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (
  //       containerRef.current &&
  //       !containerRef.current.contains(event.target)
  //     ) {
  //       setShowSearchBar(false);
  //       setShowColumList(false);
  //     }
  //   };
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [containerRef]);

  return (
    <div
      className={NavBar.navOuter}
      style={{ height: navOuter ? "100vh" : "auto" }}
    >
      <nav className={NavBar.nav}>
        <div className={`${NavBar.list} ${NavBar.leftSection}`}>
          <a href="">
            <img
              src="./images/Tata-Motors-logo-HD.png"
              alt="tata_motors_logo"
              style={{ marginTop: 12, padding: 0 }}
            />
          </a>
        </div>
        <div className={`d-flex justify-content-between ${NavBar.mainDiv}`}>
          <div className={`${NavBar.list} ${NavBar.rightSection}`}>
            <ul>
              <li
                onMouseOver={(event) => handleMouseOver(event, "AboutUs")}
                onMouseOut={(event) => handleMouseOut(event, "AboutUs")}
              >
                <a href="#">About Us</a>
                {showNavList.AboutUs ? (
                  <span className={NavBar.ArrowHover}></span>
                ) : (
                  ""
                )}
              </li>
              <li
                onMouseOver={(event) => handleMouseOver(event, "Products")}
                onMouseOut={(event) => handleMouseOut(event, "Products")}
              >
                <a href="#">Products</a>
                {showNavList.Products ? (
                  <span className={NavBar.ArrowHover}></span>
                ) : (
                  ""
                )}
              </li>
              <li
                onMouseOver={(event) => handleMouseOver(event, "Markets")}
                onMouseOut={(event) => handleMouseOut(event, "Markets")}
              >
                <a href="#">Markets</a>
                {showNavList.Markets ? (
                  <span className={NavBar.ArrowHover}></span>
                ) : (
                  ""
                )}
              </li>
              <li
                onMouseOver={(event) => handleMouseOver(event, "CSR")}
                onMouseOut={(event) => handleMouseOut(event, "CSR")}
              >
                <a href="#">CSR</a>
                {showNavList.CSR ? (
                  <span className={NavBar.ArrowHover}></span>
                ) : (
                  ""
                )}
              </li>
              <li
                onMouseOver={(event) => handleMouseOver(event, "Investors")}
                onMouseOut={(event) => handleMouseOut(event, "Investors")}
              >
                <a href="#">Investors</a>
                {showNavList.Investors ? (
                  <span className={NavBar.ArrowHover}></span>
                ) : (
                  ""
                )}
              </li>
              <li
                onMouseOver={(event) => handleMouseOver(event, "Media")}
                onMouseOut={(event) => handleMouseOut(event, "Media")}
              >
                <a href="#">Media</a>
                {showNavList.Media ? (
                  <span className={NavBar.ArrowHover}></span>
                ) : (
                  ""
                )}
              </li>
              <li>
                <a href="#">Blogs</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
            <ul
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                marginLeft: "-5px",
                padding: "0",
                // border:"1px solid green",
              }}
            >
              <li>
                <i onClick={SearchBarShow}>
                  {showSearchBar ? <RxCross2 /> : <BiSearch />}
                </i>
              </li>
              <li id="toggle" onClick={handleShow} className={NavBar.toggle}>
                <div
                  className={`${NavBar.bars} ${
                    showColumList ? `${NavBar.cross}` : ``
                  }`}
                ></div>
              </li>
              <li className={`${NavBar.imgBorder} `}>
                <a href="#">
                  <img src="./images/tata-logo3.png" alt="tata_logo" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <NavBarEvents
        showSearchBar={showSearchBar}
        showColumList={showColumList}
        setNavOuter={setNavOuter}
        showNavList={showNavList}
        handleMouseOut={handleMouseOut}
      />
    </div>
  );
}

// ------------------------NavBarEvents function start------------------------//

const NavBarEvents = ({
  showSearchBar,
  showColumList,
  setNavOuter,
  showNavList,
  handleMouseOut,
}) => {
  useEffect(
    () => {
      if (showSearchBar === true) {
        setNavOuter(true);
      } else if (showColumList === true) {
        document.body.style.position = "fixed";
        setNavOuter(true);
      }
      // else if (showNavList.AboutUs || showNavList.Products) {
      //   setNavOuter(true);
      // }
      else {
        document.body.style.position = "static";
        setNavOuter(false);
      }
    }
    //  [showColumList, showSearchBar, showNavList]
  );

  if (showSearchBar === true) {
    return (
      <form>
        <div className={NavBar.searchPopup}>
          <div className={NavBar.searchInside}>
            <input
              type="text"
              name="search"
              id="search"
              placeholder="What are you looking for?"
            />
            <div>
              <CiSearch />
            </div>
          </div>
        </div>
      </form>
    );
  } else if (showColumList === true) {
    return (
      <div className={NavBar.columnList} id="toggleDiv">
        <ul>
          <li>
            About Us{" "}
            <span>
              <i className="fa fa-angle-right"></i>
            </span>
          </li>
          <li>
            Products{" "}
            <span>
              <i className="fa fa-angle-right"></i>
            </span>
          </li>
          <li>
            Markets{" "}
            <span>
              <i className="fa fa-angle-right"></i>
            </span>
          </li>
          <li>
            CSR{" "}
            <span>
              <i className="fa fa-angle-right"></i>
            </span>
          </li>
          <li>
            Investors{" "}
            <span>
              <i className="fa fa-angle-right"></i>
            </span>
          </li>
          <li>
            Media{" "}
            <span>
              <i className="fa fa-angle-right"></i>
            </span>
          </li>
          <li>Blogs </li>
          <li>Careers </li>
          <li>Contact Us </li>
        </ul>
      </div>
    );
  } else if (showNavList.AboutUs === true) {
    return (
      <div className={NavBar.hoverList}>
        <div className={NavBar.insideHoverList}>
          <div className={NavBar.hoverListImage}>
            <img
              src="./images/navBarListImage/about-us-menu.jpg"
              title="Commercial Vehicles by Tata Motors, India "
              alt=""
              width={520}
              height={211}
            />
          </div>
          <div className={NavBar.hoverListContent}>
            <div>
              <h1>ABOUT US</h1>
            </div>
            <div style={{ display: "flex", gap: "100px" }}>
              <ul style={{ listStyle: "none", margin: "0", padding: "0" }}>
                <li>
                  <a href="#">
                    {" "}
                    <TfiAngleRight style={{ fontSize: "10px" }} /> Company
                    Profile
                  </a>
                </li>
                <li>
                  <a href="#">
                    {" "}
                    <TfiAngleRight style={{ fontSize: "10px" }} /> Leadership
                  </a>
                </li>
                <li>
                  <a href="#">
                    {" "}
                    <TfiAngleRight style={{ fontSize: "10px" }} /> Facilities
                  </a>
                </li>
              </ul>
              <ul style={{ listStyle: "none", margin: "0", padding: "0" }}>
                <li>
                  <a href="#">
                    {" "}
                    <TfiAngleRight style={{ fontSize: "10px" }} /> Subsidiaries
                  </a>
                </li>
                <li>
                  <a href="#">
                    {" "}
                    <TfiAngleRight style={{ fontSize: "10px" }} /> Innovations
                  </a>
                </li>
                <li>
                  <a href="#">
                    {" "}
                    <TfiAngleRight style={{ fontSize: "10px" }} /> Awards
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (showNavList.Products === true) {
    return (
      <div className={NavBar.hoverList}>
        <div className={NavBar.insideHoverList}>
          <div className={NavBar.hoverListImage}>
            <img
              src="./images/navBarListImage/product-menu.jpg"
              title="Commercial Vehicles by Tata Motors, India "
              alt=""
              width={520}
              height={211}
            />
          </div>
          <div className={NavBar.hoverListContent}>
            <div>
              <h1>PRODUCTS</h1>
            </div>
            <div style={{ display: "flex", gap: "100px" }}>
              <ul style={{ listStyle: "none", margin: "0", padding: "0" }}>
                <li>
                  <a href="#">
                    {" "}
                    <TfiAngleRight style={{ fontSize: "10px" }} /> Cars and
                    Sports Utility vehicles
                  </a>
                </li>
                <li>
                  <a href="#">
                    {" "}
                    <TfiAngleRight style={{ fontSize: "10px" }} /> trucks and
                    Buses
                  </a>
                </li>
                <li>
                  <a href="#">
                    {" "}
                    <TfiAngleRight style={{ fontSize: "10px" }} /> Defence
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (showNavList.CSR === true) {
    return (
      <div className={NavBar.hoverList}>
        <div className={NavBar.insideHoverList}>
          <div className={NavBar.hoverListImage}>
            <img
              src="./images/navBarListImage/csr-menu1.jpg"
              title="Commercial Vehicles by Tata Motors, India "
              alt=""
              width={520}
              height={211}
            />
          </div>
          <div className={NavBar.hoverListContent}>
            <div>
              <h1>CORPORATE SOCIAL RESPONSIBILITY</h1>
            </div>
            <div style={{ display: "flex", gap: "100px" }}>
              <ul style={{ listStyle: "none", margin: "0", padding: "0" }}>
                <li>
                  <a href="#">
                    <TfiAngleRight style={{ fontSize: "10px" }} />
                    Overview
                  </a>
                </li>
                <li>
                  <a href="#">
                    {" "}
                    <TfiAngleRight style={{ fontSize: "10px" }} /> Our
                    Programmes
                  </a>
                </li>
                <li>
                  <a href="#">
                    {" "}
                    <TfiAngleRight style={{ fontSize: "10px" }} /> CSR Policy
                  </a>
                </li>
                <li>
                  <a href="#">
                    {" "}
                    <TfiAngleRight style={{ fontSize: "10px" }} /> SMDF Annual
                    Report 2021-22
                  </a>
                </li>
                <li>
                  <a href="#">
                    {" "}
                    <TfiAngleRight style={{ fontSize: "10px" }} /> Archive
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (showNavList.Media === true) {
    return (
      <div className={NavBar.hoverList}>
        <div className={NavBar.insideHoverList}>
          <div className={NavBar.hoverListImage}>
            <img
              src="./images/navBarListImage/media-menu1.jpg"
              title="Commercial Vehicles by Tata Motors, India "
              alt=""
              width={520}
              height={211}
            />
          </div>
          <div className={NavBar.hoverListContent}>
            <div>
              <h1>ABOUT US</h1>
            </div>
            <div style={{ display: "flex", gap: "100px" }}>
              <ul style={{ listStyle: "none", margin: "0", padding: "0" }}>
                <li>
                  <a href="#">
                    {" "}
                    <TfiAngleRight style={{ fontSize: "10px" }} /> Press
                    Releases Gallery
                  </a>
                </li>
                <li>
                  <a href="#">
                    {" "}
                    <TfiAngleRight style={{ fontSize: "10px" }} /> Media
                    Coverage
                  </a>
                </li>
                <li>
                  <a href="#">
                    {" "}
                    <TfiAngleRight style={{ fontSize: "10px" }} /> Product
                    Stories
                  </a>
                </li>
              </ul>
              <ul style={{ listStyle: "none", margin: "0", padding: "0" }}>
                <li>
                  <a href="#">
                    {" "}
                    <TfiAngleRight style={{ fontSize: "10px" }} /> Gallery
                  </a>
                </li>
                <li>
                  <a href="#">
                    {" "}
                    <TfiAngleRight style={{ fontSize: "10px" }} /> Media Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (showNavList.Investors === true) {
    return (
      <div className={NavBar.hoverList}>
        <div className={NavBar.insideHoverList}>
          <div className={NavBar.hoverListContent}>
            <div style={{ display: "flex", gap: "100px" }}>
              <ul style={{ listStyle: "none", margin: "0", padding: "0" }}>
                <div>
                  <h1>Financial & filings</h1>
                </div>
                <li>
                  <a href="#">
                    {" "}
                    <TfiAngleRight style={{ fontSize: "10px" ,marginRight:"15px" }} /> Financial releases
                  </a>
                </li>
                <li>
                  <a href="#">
                    {" "}
                    <TfiAngleRight style={{ fontSize: "10px" ,marginRight:"15px" }} /> Annual reports
                  </a>
                </li>
                <li>
                  <a href="#">
                    {" "}
                    <TfiAngleRight style={{ fontSize: "10px" ,marginRight:"15px" }} /> Subsidiary Annual <br /> Reports
                  </a>
                </li>
                <li>
                  <a href="#">
                    {" "}
                    <TfiAngleRight style={{ fontSize: "10px" ,marginRight:"15px" }} /> SEC filings <span><img src="./images/navBarListImage/new.gif" alt="" /></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    {" "}
                    <TfiAngleRight style={{ fontSize: "10px" ,marginRight:"15px" }} /> ESG profile<span><img src="./images/navBarListImage/new.gif" alt="" /></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    {" "}
                    <TfiAngleRight style={{ fontSize: "10px" ,marginRight:"15px" }} /> Key financial statistics
                  </a>
                </li>
                <li>
                  <a href="#">
                    {" "}
                    <TfiAngleRight style={{ fontSize: "10px" ,marginRight:"15px" }} /> Extraordinary General <br /> Meeting 2019
                  </a>
                </li>
              </ul>
             
              <ul style={{ listStyle: "none", margin: "0", padding: "0" }}>
              <div>
                <h1>ABOUT US</h1>
              </div>
                <li>
                  <a href="#">
                    {" "}
                    <TfiAngleRight style={{ fontSize: "10px" ,marginRight:"15px" }} /> Subsidiaries
                  </a>
                </li>
                <li>
                  <a href="#">
                    {" "}
                    <TfiAngleRight style={{ fontSize: "10px" ,marginRight:"15px" }} /> Innovations
                  </a>
                </li>
                <li>
                  <a href="#">
                    {" "}
                    <TfiAngleRight style={{ fontSize: "10px" ,marginRight:"15px" }} /> Awards
                  </a>
                </li>
              </ul>
              <ul style={{ listStyle: "none", margin: "0", padding: "0" }}>
              <div>
                <h1>ABOUT US</h1>
              </div>
                <li>
                  <a href="#">
                    {" "}
                    <TfiAngleRight style={{ fontSize: "10px" ,marginRight:"15px" }} /> Subsidiaries
                  </a>
                </li>
                <li>
                  <a href="#">
                    {" "}
                    <TfiAngleRight style={{ fontSize: "10px" ,marginRight:"15px" }} /> Innovations
                  </a>
                </li>
                <li>
                  <a href="#">
                    {" "}
                    <TfiAngleRight style={{ fontSize: "10px" ,marginRight:"15px" }} /> Awards
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

// ------------------------NavBarEvents function end------------------------//
