import { contentDetails } from "../commonVariables/variables";
import style from './motorImage.module.css'
  
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