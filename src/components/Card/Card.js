import React,{useEffect} from "react";
import "./Card.scss";
import {useInView} from "react-hook-inview";

const Card=({item, cur_item,videoref})=>{
    const [ref, isTargeting]=useInView({
        threshold:0.3,
    });
    const src1="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/6341303c29c5340961dc9ae6_Mco-1-transcode.mp4";
    const src2="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/63413ff244f1dc616b7148a0_Mco-transcode.mp4";
    const src3="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/63455a67996ba248148c4e31_add-options%20(3)-transcode.mp4";
    useEffect(() => {
        if (isTargeting) {
          if (cur_item=== 0) {
            videoref.current.src = src1;
          } else if (cur_item === 1) {
            videoref.current.src = src2;
          } else {
            videoref.current.src = src3;
          }
        }
      }, [isTargeting, cur_item, videoref]);

    return(
        <div className="card-box" ref={ref} cur_item={cur_item}>
        <h4 className="card-heading">{item.heading}</h4>
        <h1 className="card-subheading">{item.subHeading}</h1>
        <p className="card-description">{item.description}</p>
      </div>
    );
};
export default Card;